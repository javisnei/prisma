import prisma from "../prismaClient.js";

// crear una compra
export const createPurchase = async (req, res) => {
  const { userId, purchaseTypeId, description, price } = req.body;
  try {
    const purchase = await prisma.purchase.create({
      data: { userId, purchaseTypeId, description, price },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la tarea:", error);
  }
};

// obtener

export const getPurchase = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true, // incluir las relaciones con esta entidad
        purchaseType: true,
      },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error al obtener las tareas:", error);
  }
};

// actualizar

export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const { userId, purchaseTypeId, description, price } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { userId, purchaseTypeId, description, price },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};
// Eliminar una tarea
export const deletePurchase = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};
