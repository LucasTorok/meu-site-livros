import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard";

export default function BookList({ limit }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentLimit = limit ? limit : 20;

  useEffect(() => {
    axios
      .get(`http://localhost:3300/api/books?limit=${currentLimit}`)
      .then((response) => {
        console.log("teste2", response);
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading
        ? // Gerar Skeletons com base no limite usando um loop for
          [...Array(limit)].map((_, index) => (
            <div key={index} className="book-card flex flex-col justify-center items-center gap-2.5 w-full max-w-[218px] cursor-wait">
              <div className="book-card-img bg-[#EDEBE4] h-[18.75rem] w-full animate-pulse"></div>
              <div className="book-card-title w-[90%] h-5 animate-pulse bg-[#D9D7D1]"></div>
              <div className="book-card-author w-[85%] h-4 animate-pulse bg-[#E0DFD8]"></div>
            </div>
          ))
        : // Quando os livros forem carregados, renderize os BookCards
          books.map((book, index) => (
            <BookCard
              key={index}
              cover={{
                hasImage: book.cover.hasImage,
                href: book.cover.href,
                alt: book.cover.alt,
              }}
              title={book.title}
              author={book.author}
            />
          ))}
    </>
  );
}
