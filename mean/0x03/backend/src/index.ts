//require("dotenv").config();
import "dotenv/config";
import "./services/databaseConnection";
import server from "./server";

const HOSTNAME: string = process.env.HOSTNAME || "";
const PORT: number = Number(process.env.PORT);

server.listen(PORT, () => {
  console.log(`Server is running on ${HOSTNAME}:${PORT}`);
});
