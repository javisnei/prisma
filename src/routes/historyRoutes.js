import express from "express";
import {createHistory} from "../controllers/historyController.js"

const router = express.Router();

router.post("/history", createHistory );
router.get("/history", getHistory );