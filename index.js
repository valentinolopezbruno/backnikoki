const express = require("express");
const cors = require('cors'); // Importa el middleware cors

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

// PRODUCTO
const productoRoutes = require('./routes/producto.routes');
app.use('/', productoRoutes); 
// MARCA
const marcaRoutes = require('./routes/marca.routes');
app.use('/', marcaRoutes); 
// CATEGORIAS
const categoriaRoutes = require('./routes/categoria.routes');
app.use('/', categoriaRoutes); 
// USUARIOS
const usuarioRoutes = require('./routes/usuario.routes');
app.use('/', usuarioRoutes); 


app.listen(PORT, () => {
  console.log("APP CORRIENDO: " + PORT);
});