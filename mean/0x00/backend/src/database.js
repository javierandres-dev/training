const mongoose = require("mongoose");

mongoose
  //.connect("mongodb://127.0.0.1/mean-0x00-users")
  /* .connect(
    "mongodb+srv://bit2023:2023BIT@cluster0.krahm.mongodb.net/?retryWrites=true&w=majority"
  ) */
  .connect(process.env.DATABASE)
  .then((db) => console.info("Users database connected!"))
  .catch((err) => console.error("Fail connection!"));
