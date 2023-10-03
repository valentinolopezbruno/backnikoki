const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCategorias = async (req, res) => {
    const categorias = await prisma.categorias.findMany();
    res.json(categorias);
};

exports.crearCategoria= async (req, res) => {
  var nuevaCategoria = req.body
  const categoria = await prisma.categorias.create({
    data: {
        nombre: nuevaCategoria.nombre
    }
  });
  res.json(categoria);
};