import { ObjectId } from "mongodb";
import DBclient from "../database/connection.js";

class productsModel {
  async create(product) {
    const colProducts = DBclient.db.collection("col_training");
    return await colProducts.insertOne(product);
  }

  async getAll() {
    const colProducts = DBclient.db.collection("col_training");
    return await colProducts.find({}).toArray();
  }

  async getOne(id) {
    const colProducts = DBclient.db.collection("col_training");
    return await colProducts.findOne({ _id: new ObjectId(id) });
  }

  async update(id, product) {
    const colProducts = DBclient.db.collection("col_training");
    return await colProducts.updateOne(
      { _id: new ObjectId(id) },
      { $set: product }
    );
  }

  async delete(id) {
    const colProducts = DBclient.db.collection("col_training");
    return await colProducts.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new productsModel();
