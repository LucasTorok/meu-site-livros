const express = require("express");
const { getBooks } = require("../controllers/booksController");

const router = express.Router();

// Define a rota para buscar livros
router.get("/books", getBooks);

module.exports = router;
