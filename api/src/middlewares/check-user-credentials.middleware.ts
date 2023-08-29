import { NextFunction, Request, Response } from "express";
import userRepository from "../repository/UserRepository";

export const checkUserCredentialsMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction,
  user_id: number
): Response | void => {
  try {
    userRepository.findOne(+user_id);
    console.warn(`this json server not recommended to production mode`);
    next();
  } catch (e) {
    next(e);
  }
};
