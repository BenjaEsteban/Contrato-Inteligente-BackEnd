const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
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
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
