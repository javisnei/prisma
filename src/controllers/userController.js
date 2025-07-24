import prisma from "../prismaClient.js";

// crear una compra
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear la usuario:", error);
  }
};

// obtener

export const getUser = async (req, res) => {
  console.log("ingrese");
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error al obtener las usuario:", error);
  }
};

// actualizar

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, password },
    });
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "Uusuario no encontrada" });
  }
};


// Eliminar una tarea
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: "Usuario eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrada" });
  }
};
