import ProductsModel from "../models/products.js";

class ProductController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await ProductsModel.create(req.body);
      res.status(201).json({ isOK: true, message: "create works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getAll(req, res) {
    try {
      const data = await ProductsModel.getAll();
      res.status(200).json({ isOK: true, message: "getAll works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getOne(req, res) {
    try {
      const data = await ProductsModel.getOne(req.params.id);
      res.status(200).json({ isOK: true, message: "getOne works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async update(req, res) {
    try {
      const data = await ProductsModel.update(req.params.id, req.body);
      res.status(200).json({ isOK: true, message: "update works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async delete(req, res) {
    try {
      const data = await ProductsModel.delete(req.params.id);
      res
        .status(206)
        .json({ isOK: true, message: "delete works!", data: null });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }
}

export default new ProductController();
