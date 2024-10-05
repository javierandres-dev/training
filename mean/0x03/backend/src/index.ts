import express, { Application, Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";
require("dotenv").config();

const app: Application = express();
const port: number = Number(process.env.PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("Works!");
});

app.use("/api", userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
