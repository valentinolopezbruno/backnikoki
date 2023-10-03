const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getMarcas = async (req, res) => {
    const marcas = await prisma.marcas.findMany();
    res.json(marcas);
};

exports.crearMarca = async (req, res) => {
  var nuevaMarca = req.body
  const marca = await prisma.marcas.create({
    data: {
        nombre: nuevaMarca.nombre
    }
  });
  res.json(marca);
};