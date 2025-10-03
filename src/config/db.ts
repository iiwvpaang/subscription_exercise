import { Sequelize } from "sequelize";
import { env } from "./env";

export const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mysql",
  logging: env.NODE_ENV === "development" ? console.log : false,
  define: {
    underscored: true
  }
});

export async function initDb() {
  await sequelize.authenticate();
  if (env.DB_SYNC) {
    // Dev convenience. Use migrations in prod.
    await sequelize.sync({ alter: true });
  }
}
