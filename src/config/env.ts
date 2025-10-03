import dotenv from "dotenv";
dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 3009),

  DB_HOST: process.env.DB_HOST ?? "127.0.0.1",
  DB_PORT: Number(process.env.DB_PORT ?? 3306),
  DB_NAME: process.env.DB_NAME ?? "landing_pad_digital",
  DB_USER: process.env.DB_USER ?? "root",
  DB_PASS: process.env.DB_PASSWORD ?? "",
  DB_SYNC: process.env.DB_SYNC === "true" // dev only
} as const;
