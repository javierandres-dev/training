const { Router } = require("express");
const uploadController = require("../controllers/uploadController");

const router = Router();

router.post("/", uploadController.uploadImage);

module.exports = router;
