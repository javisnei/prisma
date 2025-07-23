import prisma from "../prismaClient.js";

// crear una compra
export const createUser = async (req, res) => {
  const { name, email , password} = req.body;
  try {
    const purchase = await prisma.purchase.create({
      data: { name, email , password },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la usuario:", error);
  }
};

// obtener

export const getUser = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error al obtener las usuario:", error);
  }
};

// actualizar

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email , password } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { name, email , password },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Uusuario no encontrada" });
  }
};
// Eliminar una tarea
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.json({ message: "Usuario eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrada" });
  }
};
