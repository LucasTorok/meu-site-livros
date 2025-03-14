const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nome do usuário, campo obrigatório
  email: { type: String, unique: true, required: true }, // Email único e obrigatório
  password: { type: String, required: true }, // Senha obrigatória
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
