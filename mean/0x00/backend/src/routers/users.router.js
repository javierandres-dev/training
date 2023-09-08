const { Router } = require("express");
const usersController = require("../controllers/users.controller");
const router = Router();

router.post("/", usersController.createUser);
router.get("/", usersController.readUsers);
router.get("/:id", usersController.readUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
