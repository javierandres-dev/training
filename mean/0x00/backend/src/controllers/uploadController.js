const multer = require("multer");
const uploadModel = require("../models/uploads.model");

const uploadController = {
  uploadImage: async (req, res) => {
    try {
      const storage = multer.diskStorage({
        destination: "my-uploads",
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });

      const upload = multer({ storage: storage }).single("uploaded_file");

      upload(req, res, async (err) => {
        if (err) {
          console.log("error:", err);
          res.status(500).json({
            error: err.message || "An error occurred",
          });
        } else {
          const newUpload = new uploadModel({
            name: req.body.name,
            image: { data: req.file.filename, contentType: "image/png" },
          });
          const result = await newUpload.save();
          console.log("result:", result);
          res.json("Successfully uploaded");
        }
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "An error occurred",
      });
    }
  },
};
module.exports = uploadController;
