import { Request, Response, NextFunction } from "express";
import { BadRequestException, HttpErrorException } from "@utils";

export const errorHandlingMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (!err) {
    return next();
  }

  if (err instanceof HttpErrorException) {
    return res.status(err.statusCode).json(err);
  }

  if (err.hasOwnProperty("error") && err.hasOwnProperty("error_description")) {
    const payload = new BadRequestException(
      err.error as string,
      err.error_description
    );
    return res.status(payload.statusCode).json(payload);
  }

  const payload = new HttpErrorException(
    "Internal Server Error",
    err.message || JSON.stringify(err)
  );

  return res.status(payload.statusCode).json(payload);
};
