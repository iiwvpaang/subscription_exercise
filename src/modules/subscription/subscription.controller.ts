import { Request, Response, NextFunction } from "express";
import { list, subscribe } from "./subscription.service";

export const subscriptionController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const subscriptions = await list();
      res.json(subscriptions);
    } catch (e) { next(e); }
  },

  subscribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name, plan, price } = req.body;
      if (!name || !email || !plan) return res.status(400).json({ error: "name, email and plan are required" });
      const subscription = await subscribe({ email, name, plan, price });
      res.status(201).json(subscription);

    } catch (e: any) {
      // handle unique email constraint
      if (e?.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({ error: "Email already exists" });
      }
      next(e);
    }
  }
};
