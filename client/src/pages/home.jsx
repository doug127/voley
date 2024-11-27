import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Section } from "../layouts/Section/Section";
import { Horarios } from "../layouts/Horarios/Horarios";
import { Fundador } from "../layouts/Fundador/Fundador";
import { Categoria } from "../layouts/Categorias/Categorias";
// import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Section />
      <Horarios />
      <Fundador />
      <Categoria />
    </>
  );
}

export default Home;
