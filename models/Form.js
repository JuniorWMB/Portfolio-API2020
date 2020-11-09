const mongoose = require("mongoose");

const Formulaire = mongoose.model("Formulaire", {
  name: {
    type: String,
    default: "",
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    unique: true,
  },
  mobile: {
    type: String,
    unique: true,
  },
});
module.exports = Formulaire;
