const mongoose = require("mongoose")

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: "https://lapi.com.mx/web/image/product.template/4986/image_1024?unique=d881c02",
  },
  email: {
    type: String,
    required: true,
  }
});

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  console.log(password)
  console.log(receivedPassword)
  if (password === receivedPassword) {
    return true
  }
  return false
}

module.exports = mongoose.model("Usuario", UsuarioSchema);
