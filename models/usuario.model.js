const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

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
    default: "http://imagen.com",
  },
  contratos: [
    {
      ref: "Contrato",
      type: mongoose.Schema.Types.ObjectId,
    }
  ]
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
