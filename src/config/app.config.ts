import dotenv from "dotenv";
import path from "path";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env"
    : `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const config = {
  app: {
    port: Number.parseInt(process.env.APP_PORT || "3000", 10),
    env: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV === "development",
  },
  db: {
    url: process.env.DB_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
  logging: {
    level: process.env.LOG_LEVEL || "info",
  },
};
