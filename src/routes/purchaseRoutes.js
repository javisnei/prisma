import express from "express";
import {
  createPurchase,
  getPurchase,
  updatePurchase,
  deletePurchase,
} from "../controllers/purchaseController.js";
const router = express.Router();
router.post("/purchase", createPurchase);
router.get("/purchase", getPurchase);
router.put("/purchase/:id", updatePurchase);
router.delete("/purchase/:id", deletePurchase);

export default router;
