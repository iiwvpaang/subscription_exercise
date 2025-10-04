//import { InferCreationAttributes } from "sequelize";
import { sequelize } from "../../config/db";
import { Plan } from "../plans/plan.model";
import { Subscription } from "./subscription.model";
import { User } from "../users/user.model";

export async function list(): Promise<SubscriptionView[]> {
  const lists = Subscription.findAll({
    order: [["id", "ASC"]],
    include: [
      { model: User, as: "user", attributes: ["name", "email"] },
      { model: Plan, as: "plan", attributes: ["plan_name", "price"] },
    ],
  });

  return (await lists)
    .filter((s) => s.user && s.plan) // skip incomplete joins
    .map((s) => ({
      name: s.user!.name,
      email: s.user!.email,
      plan: s.plan!.plan_name as PlanName, // cast to union
      price: Number(s.plan!.price),
    }));
}

export enum PlanName {
  Professional = "Professional",
  Premium = "Premium",
}

type SubscriptionView = {
  email: string;
  name: string;
  plan: PlanName;
  price: number;
};

export async function subscribe(input: SubscriptionView): Promise<SubscriptionView> {
  const { email, name, plan, price } = input;

  return sequelize.transaction(async (tx) => {
    // 1. Find or create user by email
    const [user, createdUser] = await User.findOrCreate({
      where: { email },
      defaults: {
        email,
        name,
        create_at: new Date(),
    },
      transaction: tx,
    });

    // 2. Find a plan by name
    const planRecord = await Plan.findOne({
        where: { plan_name: plan },
        transaction: tx,
    });

    if (!planRecord) throw new Error("Plan not found");

    // 3. Create subscription with the FKs
    const subscription = await Subscription.create(
      {
        user_id: user.id,
        plan_id: planRecord!.id,
        start_at: new Date(),
        update_at: new Date(),
      },
      { transaction: tx }
    );

    // 4. Eager-load user & plan so caller gets email/name/plan/price in one object
    const subscriptionData = await Subscription.findByPk(subscription.id, {
      include: [
        { model: User, as: "user", attributes: ["name", "email"] },
        { model: Plan, as: "plan", attributes: ["plan_name", "price"] },
      ],
      transaction: tx,
    });

    if (!subscriptionData) throw new Error("Subscription not found");

    return {
        name: user.name!,
        email: user.email!,
        plan: planRecord?.plan_name as PlanName,
        price: Number(planRecord?.price),
    };
  });
}
