import { MongoClient } from "mongodb";
/*
"mongodb+srv://<username>:<password>@<cluster>.krahm.mongodb.net/<dbname(optional)>?retryWrites=true&w=majority"
*/

/* const connectionString = process.env.DATABASE_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("sample_training");
console.log("Connected");
export default db; */

class DBclient {
  constructor() {
    const connectionString = process.env.DATABASE_URI || "";
    this.client = new MongoClient(connectionString);
    this.connectDB();
  }

  async connectDB() {
    let result = "Connecting to database, please wait ...";
    console.log(result);
    try {
      await this.client.connect();
      this.db = this.client.db("sample_training");
      result = "... Connected to the database.";
    } catch (error) {
      result = `... Database connection error: ${error}`;
    } finally {
      console.log(result);
    }
  }
}

export default new DBclient();
