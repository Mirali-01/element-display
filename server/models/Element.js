const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  shells: [Number],
  ionization_energies: [Number],
  name: String,
  appearance: String,
  atomic_mass: Number,
  boil: Number,
  category: String,
  color: String,
  density: Number,
  discovered_by: String,
  melt: Number,
  molar_heat: Number,
  named_by: String,
  number: Number,
  period: Number,
  phase: String,
  source: String,
  spectral_img: String,
  summary: String,
  symbol: String,
  xpos: Number,
  ypos: Number,
  electron_configuration: String,
  electron_affinity: Number,
  electronegativity_pauling: Number,
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;
