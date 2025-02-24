import "dotenv/config";
import DBclient from "./database/connection.js";
import server from "./server.js";

const port = process.env.PORT;

let result = null;

try {
  server.listen(port);
  result = `Server is listening on port: ${port}`;
} catch (error) {
  result = `Server is not running\nError: ${error}`;
} finally {
  console.log(result);
}
