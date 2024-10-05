import { Router, Request, Response } from "express";
import timeLog from "../middlewares/timeLog";
import errorHandler from "../middlewares/errorHandler";

const router: Router = Router();

router.use(timeLog);

router.get("/users", (req: Request, res: Response) => {
  res.json({ message: "Got a GET request" });
});

router.get("/users/:userId", (req: Request, res: Response) => {
  try {
    if (req.params.userId === "0") {
      throw new Error("userId is 0");
    } else {
      res.json({
        message: `Got a GET request, userId: ${req.params.userId}`,
      });
    }
  } catch (error) {
    errorHandler(error, req, res, () => {
      console.log("use errorHandler");
    });
  }
});

router.post("/users", (req: Request, res: Response) => {
  res.json({ message: "Got a POST request" });
});

router.put("/users/:userId", (req: Request, res: Response) => {
  res.json({ message: `Got a PUT request, userId: ${req.params.userId}` });
});

router.patch("/users/:userId", (req: Request, res: Response) => {
  res.json({ message: `Got a PATCH request, userId: ${req.params.userId}` });
});

router.delete("/users/:userId", (req: Request, res: Response) => {
  res.json({ message: `Got a DELETE request, userId: ${req.params.userId}` });
});

export default router;
