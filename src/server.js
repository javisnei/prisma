import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import typeRoutes from "./routes/typeRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import historyRoutes from "./routes/historyRoutes.js"
import { connect } from "./prismaClient.js";
dotenv.config();
const app = express();
app.use(cors()); // Permite peticiones desde otros orígenes (ej: frontend)
app.use(express.json()); // Permite recibir JSON desde el frontend
app.use("/api", userRoutes); 
app.use("/api", typeRoutes);
app.use("/api", purchaseRoutes);
app.use("/api", historyRoutes);// Prefijo para nuestras rutas
// conectarme a la base de datos
connect();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
 console.log(`뜜뜝뜡뜢뜞뜟뜠 Servidor corriendo en http://localhost:${PORT}`);
}); 