import express from "express";
import cors from "cors";
import api from "./http/routes";

export function createApp() {
  const app = express();

  // middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // health check
  app.get("/health", (_req, res) => res.send("ok"));

  // mount all API routes under /api
  app.use("/api", api);

  return app;
}
