import "dotenv/config";
import server from "./server.js";

const port = process.env.PORT;

let result = "";

try {
  server.listen(port);
  result = `Server is running and listening on port: ${port}`;
} catch (error) {
  result = `Server is not running!\nError: ${error}`;
} finally {
  console.info(result);
}
