import { useState, useEffect } from "react";
import sectionStyles from "./Section.module.css";

export const Section = () => {
  const images = ["../../public/assets/images/Bg image.png"];

  return (
    <>
      <div className={`${sectionStyles.body} `}>
        <div
          className={`${sectionStyles.container} flex justify-center items-center`}
        >
          <div
            className={`${sectionStyles.center} flex h-80 w-96 text-center items-center flex-col`}
          >
            <h2 className={`${sectionStyles.title} py-6`}>
              ¡Bienvenidos a nuestra Escuela de Voleibol!
            </h2>
            <p className={`${sectionStyles.titleP} pt-3 px-6`}>
              Somos una academia deportiva diseñada para adultos que desean
              aprender, mejorar y disfrutar del vóley en un ambiente recreativo
              y amigable. Ofrecemos niveles para todos, desde principiantes que
              están descubriendo el deporte hasta jugadores avanzados que buscan
              perfeccionar su técnica.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
