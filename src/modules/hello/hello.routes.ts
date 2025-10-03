import { Router } from "express";
import { helloController } from "./hello.controller";

const router = Router();

// GET /api/hello
router.get("/", helloController.hello);

export default router;
