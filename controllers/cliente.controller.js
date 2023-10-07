const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getClientes= async (req, res) => {
    const clientes = await prisma.clientes.findMany();
    res.json(clientes);
};

exports.crearCliente = async (req, res) => {
  var nuevoCliente = req.body;
  /* const hashedPassword = await bcrypt.hash(nuevoUsuario.password, 10); */

  const cliente = await prisma.clientes.create({
    data: {
        nombre: nuevoCliente.nombre,
        celular: nuevoCliente.celular,
        direccio: nuevoCliente.direccio,
        dni: nuevoCliente.dni,
        correo: nuevoCliente.correo
    }
  });
  res.json(cliente);
};

exports.eliminarCliente= async (req, res) => {
    var id = req.body;
    const clienteEliminado = await prisma.clientes.delete({where:{id:id}});
    res.json(clienteEliminado);
};