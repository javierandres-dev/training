import express from "express";
import productsController from "../controllers/products.js";

const route = express.Router();

route.post("/", productsController.create);
route.get("/", productsController.getAll);
route.get("/:id", productsController.getOne);
route.put("/:id", productsController.update);
route.delete("/:id", productsController.delete);

export default route;
