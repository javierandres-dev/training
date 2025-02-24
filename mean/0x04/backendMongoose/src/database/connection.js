import mongoose from "mongoose";

class DBclient {
  constructor() {
    this.connect();
  }

  async connect() {
    const connectionString = process.env.DATABASE_URI || "";
    await mongoose.connect(connectionString);
    console.log("Connected to the database.");
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected to the database.");
    } catch (error) {
      console.log(
        `An error occured while disconnect to the database\nError: ${error}`
      );
    }
  }
}

export default new DBclient();
