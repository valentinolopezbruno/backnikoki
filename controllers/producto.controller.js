const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProductos = async (req, res) => {
    const productos = await prisma.productos.findMany();
    res.json(productos);
};

exports.eliminarProducto = async (req, res) => {
  var idProducto = req.body
  console.log(idProducto)
  const producto = await prisma.productos.delete({
    where:{
      id: idProducto.id
    }
  });
  res.json(producto);
};

exports.crearProducto = async (req, res) => {
  var nuevoProducto = req.body
  console.log(nuevoProducto)

  // Si la variable nuevaCategoria llega cargada, entonces el usuario quiere crear una nueva categoria.
  // Creo la categoria y le asigno su id al producto que creo posteriormente.
  if(nuevoProducto.nuevaCategoria.length > 3){
    console.log(nuevoProducto.nuevaCategoria)
    nuevaCategoria = await prisma.categorias.create({
      data: {
          nombre: nuevoProducto.nuevaCategoria
      }
    });
    nuevoProducto.idcategoria = await nuevaCategoria.id
  }
  // Si la variable nuevaMarcallega cargada, entonces el usuario quiere crear una nueva marca.
  // Creo la marca y le asigno su id al producto que creo posteriormente.
  if(nuevoProducto.nuevaMarca.length > 3){
    console.log(nuevoProducto.nuevaCategoria)
    nuevaMarca = await prisma.marcas.create({
      data: {
          nombre: nuevoProducto.nuevaMarca
      }
    });
    nuevoProducto.idmarca = await nuevaMarca.id
  }
  //Creo el producto 
  const productos = await prisma.productos.create({
    data: {
      idcategoria: nuevoProducto.idcategoria,
      idmarca: nuevoProducto.idmarca,
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
      idmoneda: nuevoProducto.idmoneda,
      descripcion: nuevoProducto.descripcion,
      disponibilidad: nuevoProducto.disponibilidad
    }
  });
  if(productos){
    res.json({code: 1});
  }
};

exports.actualizarProducto = async (req, res) => {
  var productoActualizado = req.body
  const producto = await prisma.productos.update({
    where:{
      id: productoActualizado.id
    },
    data: {
      idcategoria: productoActualizado.idcategoria,
      idmarca: productoActualizado.idmarca,
      nombre: productoActualizado.nombre,
      precio: productoActualizado.precio,
      idmoneda: 1,
      descripcion: productoActualizado.descripcion,
      disponibilidad: productoActualizado.disponibilidad
    }
  });
  if(producto){
    res.json({code:1})
  }
};

exports.actualizarDisponibilidad = async (req, res) => {
  var {id,disponibilidad} = req.body
  console.log(id, disponibilidad)
  const producto = await prisma.productos.update({
    where:{
      id: id
    },
    data: {
      disponibilidad: disponibilidad
    }
  });
  if(producto){
    res.json({code:1})
  }
};