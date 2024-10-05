import express, { Application, Request, Response } from "express";
import userRouter from "./routers/userRouter";

require("dotenv").config();

const morgan = require("morgan");
const cors = require("cors");

const server: Application = express();
const port: number = Number(process.env.PORT);

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api", userRouter);

server.get("/", (req: Request, res: Response) => {
  res.json({ message: "Works!" });
});

server.listen(port, () => {
  console.log(`Server is running on ${process.env.HOSTNAME}:${port}`);
});
