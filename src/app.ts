import express from "express";
import cors from "cors";

export function createApp() {
  const app = express();

  // middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // health check
  app.get("/health", (_req, res) => res.send("ok"));

  return app;
}
