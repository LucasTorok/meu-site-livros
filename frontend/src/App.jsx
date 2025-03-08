import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./styles/global.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Menu */}
      <Menu />
      {/* Conteudo */}
      <main className="main">
        <Outlet />
      </main>
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
