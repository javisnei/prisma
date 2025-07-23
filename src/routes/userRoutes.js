import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
