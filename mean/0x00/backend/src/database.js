const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/mean-0x00-users")
  /* .connect(
    "mongodb+srv://admin:v665F7K7uZvRdIjm@cluster0.krahm.mongodb.net/?retryWrites=true&w=majority"
  ) */
  .then((db) => console.info("Users database connected!"))
  .catch((err) => console.error("Fail connection, error:", err));
