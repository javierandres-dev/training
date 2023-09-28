const mongoose = require("mongoose");

mongoose
  //.connect("mongodb://127.0.0.1/mean-0x00-users")
  /* .connect(
    "mongodb+srv://<username>:<password>@<cluster>.krahm.mongodb.net/<dbname(optional)>?retryWrites=true&w=majority"
  ) */
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((db) => console.info("Successfully! Connected to the database."))
  .catch((err) => console.error("Failed. Database connection error."));
