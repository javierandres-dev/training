import express, { Application, Request, Response } from "express";
import userRouter from "./routers/userRouter";

const morgan = require("morgan");
const cors = require("cors");

const server: Application = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api", userRouter);

server.get("/", (req: Request, res: Response) => {
  res.json({ message: "Works!" });
});

export default server;
