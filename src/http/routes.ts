import { Router } from "express";
import helloRouter from "../modules/hello/hello.routes";
import subscriptionRouter from "../modules/subscription/subscription.route";

const api = Router();

api.use("/hello", helloRouter);
api.use("/subscription", subscriptionRouter);

export default api;
