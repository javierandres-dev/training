import producsModel from "../models/products.js";

class productsController {
  constructor() {}

  async create(req, res) {
    try {
      const data = producsModel.create(req.body);
      res.status(200).json({ isOK: true, data: "create works!" });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getAll(req, res) {
    try {
      res.status(200).json({ isOK: true, data: "getAll works!" });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async getOne(req, res) {
    try {
      res.status(200).json({ isOK: true, data: "getOne works!" });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async update(req, res) {
    try {
      res.status(200).json({ isOK: true, data: "update works!" });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }

  async delete(req, res) {
    try {
      res.status(200).json({ isOK: true, data: "delete works!" });
    } catch (error) {
      res.status(500).json({ isOK: false, data: error });
    }
  }
}

export default new productsController();
