const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env")) {
  require("dotenv").config({ path: "./config.env" });
}
const toBool = (x) => x === "true";

const DATABASE_URL = process.env.DATABASE_URL || "./assets/database.db";

module.exports = {
  BASE_URL: "https://api.alpha-md.rf.gd/",
  ALPHA_KEY: process.env.ALPHA_KEY || "alpha-free",
  LOGS: toBool(process.env.LOGS) || true,
  SESSION_ID: process.env.SESSION_ID || "idvu3oj6_XASENA_w46_XASENA_nb8c",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[#]",
  BRANCH: "master",
  WARN_COUNT: 3,
  SUDO: process.env.SUDO || "918765432109",
  OWNER_NAME: process.env.OWNER_NAME || "Neeraj-X0",
  BOT_NAME: process.env.BOT_NAME || "X-asena",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./assets/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
