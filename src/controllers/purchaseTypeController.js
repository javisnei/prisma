import prisma from "../prismaClient.js";

export const createType = async (req, res) => {
  const { type } = req.body;

  try {
    const newType = await prisma.purchaseType.create({
      data: { type },
    });
    res.json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la Tipo de Compra:", error);
  }
};

export const deleteType = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.purchaseType.delete({ where: { id: Number(id) } });
    res.json({menssage:"Tipo de compra Eliminada"});
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al eliminar la Tipo de Compra:", error);
  }
};
