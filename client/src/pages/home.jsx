import { Navbar } from "../components/Navbar/Navbar";
import { Section } from "../layouts/Section/Section";
import { Planes } from "../layouts/Planes/Planes";
import { Fundador } from "../layouts/Fundador/Fundador";
import { Categoria } from "../layouts/Categorias/Categorias";
import { Footer } from "../layouts/Footer/Footer";
import bgImage from "../images/Bg image.png";
// import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Section bg={bgImage} />
      <Planes />
      <Fundador />
      <Categoria />
      <Footer />
    </>
  );
}

export default Home;
