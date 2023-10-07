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
        direccion: nuevoCliente.direccion,
        dni: nuevoCliente.dni,
        correo: nuevoCliente.correo
    }
  });
  res.json(cliente);
};

exports.eliminarCliente= async (req, res) => {
    var cliente = req.body;
    const clienteEliminado = await prisma.clientes.delete({where:{id:cliente.id}});
    res.json(clienteEliminado);
};

exports.actualizarCliente = async (req, res) => {
  var nuevoCliente = req.body;
  const clienteActualizado = await prisma.clientes.update({
    where:{
      id: nuevoCliente.id
    },
    data: {
      nombre: nuevoCliente.nombre,
      celular: nuevoCliente.celular,
      direccion: nuevoCliente.direccion,
      dni: nuevoCliente.dni,
      correo: nuevoCliente.correo
    }
  });
  res.json(clienteActualizado)
};