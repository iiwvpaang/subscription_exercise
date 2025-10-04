import { Router } from "express";
import { subscriptionController } from "./subscription.controller";

const router = Router();

router.get("/list", subscriptionController.list);
router.post("/subscribe", subscriptionController.subscribe);

export default router;
