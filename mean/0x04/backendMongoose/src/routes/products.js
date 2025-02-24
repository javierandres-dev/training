import express from "express";
import ProductController from "../controllers/products.js";

const route = express.Router();

route.post("/", ProductController.create);
route.get("/", ProductController.getAll);
route.get("/:id", ProductController.getOne);
route.put("/:id", ProductController.update);
route.delete("/:id", ProductController.delete);

export default route;
