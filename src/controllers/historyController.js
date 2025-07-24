import prisma from "../prismaClient.js";

export const createHistory = async (req, res) => {

  console.log(req.body)
  const { purchaseId, oldDescription, oldPrice } = req.body;

  try {
    const newHistory = await prisma.PurchaseHistory.create({
      data: { purchaseId, oldDescription, oldPrice },
    });
    res.json(newHistory);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la hustoria:", error);
  }
};

export const getHistory = async (req, res) => {
  try {
    const historys = await prisma.PurchaseHistory.findMany({
      include: {
        purchase: true,
      },
    });
    res.json(historys);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Problema al obtener el Historial:", error);
  }
};
