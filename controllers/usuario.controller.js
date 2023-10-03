const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getUsuarios= async (req, res) => {
    const usuarios = await prisma.usuarios.findMany();
    res.json(usuarios);
};

exports.crearUsuario = async (req, res) => {
  var nuevoUsuario = req.body;
  /* const hashedPassword = await bcrypt.hash(nuevoUsuario.password, 10); */

  const usuario = await prisma.usuarios.create({
    data: {
        usuario: nuevoUsuario.usuario,
        password: nuevoUsuario.password
    }
  });
  res.json(usuario);
};


// Funcion para validar si el usuario y la contraseña ingresado en el login es correcto o no
exports.validarUsuario = async (req, res) => {
  var {usuario, password} = req.body;
  // Traigo todos los usuarios 
  const usuarios = await prisma.usuarios.findMany();
  // Voy comparando uno por uno a ver si coincide con el USERNAME
  for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].usuario === usuario){
      if(usuarios[i].password === password){
        res.json({code:1});
      } else {
        res.json({code:0});
      }
    } else console.log("no es igual")
  }
};

