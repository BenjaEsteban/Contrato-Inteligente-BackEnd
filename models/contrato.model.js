const mongoose = require("mongoose");

const ContratoSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  idProvedor: {
    type: String,
    required: true,
  },
  cantidad: {
      type: Int32Array,
      required: true,
  },
  idReceptor: {
      type: String,
      required: true,
  }
});

module.exports = mongoose.model("Contrato", ContratoSchema);
