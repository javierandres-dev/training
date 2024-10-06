import { Request, Response } from "express";
import errorHandler from "../middlewares/errorHandler";

const UsersController = {
  create: (req: Request, res: Response) => {
    try {
      res.json({ message: "Got a POST request" });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
  readAll: (req: Request, res: Response) => {
    try {
      res.json({ message: "Got a GET request" });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
  read: (req: Request, res: Response) => {
    try {
      res.json({
        message: `Got a GET request, userId: ${req.params.userId}`,
      });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
  update: (req: Request, res: Response) => {
    try {
      res.json({ message: `Got a PUT request, userId: ${req.params.userId}` });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
  updateChunk: (req: Request, res: Response) => {
    try {
      res.json({
        message: `Got a PATCH request, userId: ${req.params.userId}`,
      });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
  delete: (req: Request, res: Response) => {
    try {
      res.json({
        message: `Got a DELETE request, userId: ${req.params.userId}`,
      });
    } catch (error) {
      errorHandler(error, req, res, () => {
        console.log("error caught");
      });
    }
  },
};

export default UsersController;
