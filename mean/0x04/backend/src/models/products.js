import DBclient from "../database/connection.js";

class productsModel {
  async create(value) {
    const colTrainingProducts = DBclient.db.collection("sample_training");
    await colTrainingProducts.insertOne(value);
  }
}

export default new productsModel();
