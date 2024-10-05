import { Request, Response, NextFunction } from "express";

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.info("Time: ", Date.now());
  next();
};

export default timeLog;
