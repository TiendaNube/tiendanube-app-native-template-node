import { NextFunction, Request, Response } from "express";
import { HttpErrorException } from "@utils";

const requiredEnvKeys = [
  "TIENDANUBE_AUTENTICATION_URL",
  "TIENDANUBE_API_URL",
  "CLIENT_SECRET",
  "CLIENT_ID",
  "CLIENT_EMAIL",
];

export const beforeCheckClientMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const errors: string[] = [];
  for (const key of requiredEnvKeys) {
    if (!process.env[key]) errors.push(key);
  }

  if (errors.length > 0) {
    const message =
      "It is necessary to set request variables at .env-example file and rename it to .env";
    return next(
      new HttpErrorException(message, `envs: [${errors.join(",")}] is required`)
    );
  }

  return next();
};
