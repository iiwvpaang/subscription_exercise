import { Router } from "express";
import helloRouter from "../modules/hello/hello.routes";

const api = Router();

api.use("/hello", helloRouter);

export default api;
