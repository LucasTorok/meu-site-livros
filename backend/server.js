require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const booksRoutes = require("./routes/booksRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Routes
app.use("/api", booksRoutes);
app.use("/auth", authRoutes);  // Atualize aqui

// Iniciar servidor
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
