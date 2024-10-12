import mongoose from "mongoose";

const DATABASE_URI: string = process.env.DATABASE_URI || "";

mongoose
  .connect(DATABASE_URI)
  .then((res) => {
    console.log("database connected successfuly!");
  })
  .catch((err) => {
    console.log("database doesn't connect, an error has occurred!");
    console.log("err:", err);
  });
