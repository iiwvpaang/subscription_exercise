import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
  BelongsToGetAssociationMixin,
} from "sequelize";
import { sequelize } from "../../config/db";
import { User } from "../users/user.model";
import { Plan } from "../plans/plan.model";

export class Subscription extends Model<
  InferAttributes<Subscription>,
  InferCreationAttributes<Subscription>
> {
  declare id: CreationOptional<number>;
  declare user_id: ForeignKey<User["id"]>;;
  declare plan_id: ForeignKey<Plan["id"]>;;
  declare start_at: Date;
  declare update_at: Date;

  declare user?: NonAttribute<User>;
  declare plan?: NonAttribute<Plan>;

  declare getUser: BelongsToGetAssociationMixin<User>;
  declare getPlan: BelongsToGetAssociationMixin<Plan>;
}

Subscription.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    plan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "subscription",
    modelName: "Subscription",
    timestamps: false,
    underscored: true
  }
);

User.hasMany(Subscription, { foreignKey: "user_id", as: "subscriptions" });
Plan.hasMany(Subscription, { foreignKey: "plan_id", as: "subscriptions" });

Subscription.belongsTo(User, { foreignKey: "user_id", as: "user" });
Subscription.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });
