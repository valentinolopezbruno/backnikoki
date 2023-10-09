const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getVentas= async (req, res) => {
    const ventas = await prisma.ventas.findMany();
    res.json(ventas);
};

exports.crearVenta= async (req, res) => {
  var nuevaVenta = req.body;
  const venta = await prisma.ventas.create({
    data: {
        idCliente: nuevaVenta.idCliente,
        total: nuevaVenta.total,
        fecha: nuevaVenta.fecha
    }
  });
  // Una vez que creo la venta, guardo el ID en la tabla de productosxventas.
  var productosCreados = [];
  for(let i=0;nuevaVenta.productos.lenght>0;i++){
    const producto = await prisma.productosporventas.create({
        data: {
            idVenta: venta.id,
            idProducto: venta.productos[i].id,
            cantidad: venta.productos[i].cantidad
        }
      });
      productosCreados.push(producto)
  }
  res.json({venta, productosCreados});
};


