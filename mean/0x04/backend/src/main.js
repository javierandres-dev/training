import express from "express";

const server = express();
const port = 4100;

try {
  //console.log("works!");
  server.get("/", (req, res) => {
    res.json({ message: "root works!" });
  });

  server.listen(port, () => {
    console.log(`Server is runnig and listening on port ${port}`);
  });
} catch (error) {
  console.log("Server not running! Error:", error);
} finally {
  console.log("Done!");
}
