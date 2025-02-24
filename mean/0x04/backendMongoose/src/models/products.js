import mongoose from "mongoose";
import Product from "../schemas/products.js";

class ProductsModel {
  async create(product) {
    return await Product.create(product);
  }

  async getAll() {
    return await Product.find();
  }

  async getOne(id) {
    return await Product.findById(id);
  }

  async update(id, product) {
    return await Product.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      product,
      { new: true }
    );
  }

  async delete(id) {
    return await Product.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export default new ProductsModel();
