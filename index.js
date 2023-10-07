const express = require("express");
const cors = require('cors'); // Importa el middleware cors

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:4200', // Reemplaza esto con el origen correcto de tu aplicación Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204, // Algunas respuestas HTTP exitosas no tienen contenido
};

app.use(cors(corsOptions));

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
// CLIENTES
const clienteRoutes = require('./routes/cliente.routes');
app.use('/', clienteRoutes); 


app.listen(PORT, () => {
  console.log("APP CORRIENDO: " + PORT);
});