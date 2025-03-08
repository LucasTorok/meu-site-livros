const axios = require("axios");

const getBooks = async (req, res) => {
  const limit = parseInt(req.query.limit) || 20;

  try {
    const response = await axios.get(`https://openlibrary.org/trending/forever.json&limit=${limit}`);
    const books = response.data.works.slice(0, limit).map((book) => ({
      title: book.title,
      author: book.author_name ? book.author_name[0] : "Desconhecido",
      cover: {
        hasImage: !!book.cover_i,
        href: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "",
        alt: book.title,
      },
    }));
    res.json(books);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

module.exports = { getBooks };
