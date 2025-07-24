import prisma from "../prismaClient.js";

// crear una compra
export const createPurchase = async (req, res) => {

  console.log(req.body)
  const { userId, purchaseTypeId, description, price } = req.body;

  try {
    const purchase = await prisma.purchase.create({
      data: { userId, purchaseTypeId, description, price },
    });
    res.json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la Compra:", error);
  }
};

// obtener

export const getPurchase = async (req, res) => {
  try {
    const purchase = await prisma.purchase.findMany({
      include: {
        user: true, // incluir las relaciones con esta entidad
        purchaseType: true,
      },
    });
    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error al obtener las Compras:", error);
  }
};

// actualizar

export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const { userId, purchaseTypeId, description, price } = req.body;
  try {
    const task = await prisma.purchase.update({
      where: { id: Number(id) },
      data: { userId, purchaseTypeId, description, price },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Compra no encontrada" });
  }
};
// Eliminar una tarea
export const deletePurchase = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.purchase.delete({ where: { id: Number(id) } });
    res.json({ message: "Compra eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Compra no encontrada" });
  }
};
