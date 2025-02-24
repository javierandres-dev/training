import express from "express";
import morgan from "morgan";
import routesProducts from "./routes/products.js";

const server = express();

server.use(morgan("dev"));
server.use("/products", routesProducts);

server.get("/", (req, res) => {
  res.status(200).json({ isOK: true, data: "root works!" });
});

export default server;
