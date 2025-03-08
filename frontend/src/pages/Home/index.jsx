import booksKv from "@/assets/books-kv.png";
import booksAboutUs from "@/assets/books-aboutus.png";
import BookList from "@/components/BookList";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="content-section hero-section-container">
          <div className="hero-section-info flex flex-col gap-5 max-w-[65ch]">
            <h1 className="text-5xl text-[#222222]">
              Onde as páginas ganham voz e as histórias se transformam em
              opinião.
            </h1>
            <p className="description">
              Adentre o vasto universo literário e revele suas percepções,
              compartilhando reflexões profundas sobre obras e autores que
              moldam o imaginário.
            </p>
          </div>
          <div className="hero-section-kv">
            <img src={booksKv} alt="Livros" />
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="sobre" className="section aboutus">
        <div className="header-section">
          <p className="subtitle-section">Conheça um pouco da LucasBook’s.</p>
          <h2 className="title-section">
            <span className="bg-[#F3F2EC] px-10 z-[1]">Sobre nós</span>
          </h2>
        </div>
        <div className="content-section about-us-container">
          <div className="about-us-info flex flex-col gap-5 max-w-[75ch]">
            <h2 className="text-[2rem] text-[#222222]">Quem é LucasBook’s?</h2>
            <p className="description">
              Primeiramente, seja bem vindo! Aqui é um espaço literário para
              explorar, compartilhar e descobrir tudo sobre o fascinante
              universo dos livros! Somos uma plataforma dedicada a avaliações de
              obras literárias, oferecendo insights valiosos para leitores
              ávidos e curiosos. Aqui você encontrará análises criteriosas,
              opiniões sinceras e dicas para mergulhar nas páginas das melhores
              histórias. Seja você fã de clássicos ou amante de novas
              tendências, o LucasBook's é o lugar perfeito para trocar ideias,
              se inspirar e deixar sua paixão pela leitura crescer. Junte-se à
              nossa comunidade e torne cada leitura ainda mais especial!
            </p>
          </div>
          <div className="about-us-image">
            <img src={booksAboutUs} alt="Livros" />
          </div>
        </div>
      </section>
      {/* Highlights */}
      <section id="destaques" className="section highlights">
        <div className="header-section">
          <p className="subtitle-section">Você deveria dar uma lida.</p>
          <h2 className="title-section">
            <span className="bg-[#F3F2EC] px-10 z-[1]">Em destaque</span>
          </h2>
        </div>
        <div className="content-section highlight-container">
          <BookList limit={5} />
        </div>
        <div className="flex w-full justify-center items-center">
          <a
            className="btn outline mt-10 flex items-center uppercase font-bold tracking-[2px] text-[#979693] border border-[#979693] py-2.5 px-5 cursor-pointer transition-all duration-300 hover:scale-[1.03] focus:scale-[1.03]"
            href="#"
          >
            Confira mais livros
          </a>
        </div>
      </section>
    </>
  );
}
