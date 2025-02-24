import producsModel from "../models/products.js";

class productsController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await producsModel.create(req.body);
      res.status(201).json({ isOK: true, message: "create works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getAll(req, res) {
    try {
      const data = await producsModel.getAll();
      res.status(200).json({ isOK: true, message: "getAll works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getOne(req, res) {
    try {
      const data = await producsModel.getOne(req.params.id);
      res.status(200).json({ isOK: true, message: "getOne works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async update(req, res) {
    try {
      const data = await producsModel.update(req.params.id, req.body);
      res.status(200).json({ isOK: true, message: "update works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async delete(req, res) {
    try {
      const data = await producsModel.delete(req.params.id);
      res.status(206).json({ isOK: true, message: "delete works!", data });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }
}

export default new productsController();
