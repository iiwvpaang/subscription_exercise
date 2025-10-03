import { createApp } from "./app";
import { env } from "./config/env";
import { initDb } from "./config/db";

const app = createApp();

async function start() {
  await initDb();
  const app = createApp();
  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on http://localhost:${env.PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});