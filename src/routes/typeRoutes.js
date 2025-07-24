import express from "express";
import {
  createType,
  deleteType,
} from "../controllers/purchaseTypeController.js";

const router = express.Router();
router.post("/type", createType);
router.delete("/type/:id", deleteType);

export default router;