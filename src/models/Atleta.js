const mongoose = require("mongoose");

const AtletaSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  position: { type: String, required: true },
  category: { type: String, required: true },
  birthdate: { type: Date, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  number: { type: Number, required: true },
});

module.exports = mongoose.model("Atleta", AtletaSchema);
