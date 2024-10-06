import { Router } from "express";
import UsersController from "../controllers/usersController";
import timeLog from "../middlewares/timeLog";

const router: Router = Router();

router.use(timeLog);

router.post("/users", UsersController.create);
router.get("/users", UsersController.readAll);
router.get("/users/:userId", UsersController.read);
router.put("/users/:userId", UsersController.update);
router.patch("/users/:userId", UsersController.updateChunk);
router.delete("/users/:userId", UsersController.delete);

export default router;
