const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// Rota de Registro de Usuário
router.post("/register", registerUser);

// Rota de Login
router.post("/login", loginUser);

module.exports = router;
