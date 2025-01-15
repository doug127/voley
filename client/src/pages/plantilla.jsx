import { Navbar } from "../components/Navbar/Navbar";
import { Section } from "../layouts/Section/Section";
import { Card } from "../components/Card/Card";
import bgImage from "../images/Fondo 2.jpg";

function Plantilla() {
  return (
    <>
      <Navbar />
      <Section bg={bgImage} />
      <Card />
    </>
  );
}

export default Plantilla;
