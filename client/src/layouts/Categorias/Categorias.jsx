import CategoriaStyles from "./Categoria.module.css";

export const Categoria = () => {
  const h4Styles = `font-medium py-4`;

  return (
    <div className={``}>
      <h2 className={`font-semibold text-center text-4xl`}>NIVELES DE JUEGO</h2>
      <div className={`flex justify-evenly py-10 px-16`}>
        {data.map((nivel, index) => (
          <div
            className={`${CategoriaStyles.container} flex flex-col px-8  pb-14 mx-4`}
            key={index}
          >
            <h3
              className={`text-center font-medium text-2xl mt-20 pb-6`}
            >{`NIVEL ${index + 1}`}</h3>
            <h3
              className={`text-center font-medium pb-3`}
            >{`NIVEL ${nivel.nombre.toUpperCase()}`}</h3>
            <ul className="text-left">
              <li className={``}>
                <h4 className={`${h4Styles}`}>Enfoque:</h4>
                <ul className={``}>
                  {nivel.enfoque.map((item, subIndex) => (
                    <li className={`list-disc list-inside`} key={subIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className={`${h4Styles}`}>Contenido:</h4>
                <ul>
                  {nivel.contenido.map((item, subIndex) => (
                    <li className={`list-disc list-inside`} key={subIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    nombre: "Principiante",
    enfoque: [
      "Enseñar los fundamentos básicos del voleibol.",
      "Introducir la técnica y las reglas del juego.",
    ],
    contenido: [
      "Posición básica",
      "Técnicas de golpeo",
      "Reglas básicas",
      "Trabajo en equipo",
      "Ejercicios prácticos",
    ],
  },
  {
    nombre: "Intermedio",
    enfoque: [
      "Refinar las técnicas básicas",
      "Introducir tácticas de equipo y estrategias simples",
    ],
    contenido: [
      "Técnicas avanzadas de golpeo",
      "Movimientos y desplazamientos",
      "Estrategias básicas",
      "Trabajo en equipo",
      "Partidos simulados",
    ],
  },
  {
    nombre: "Avanzado",
    enfoque: [
      "Perfeccionar técnicas individuales y colectivas",
      "Aplicar estrategias complejas y jugar a nivel competitivo",
    ],
    contenido: [
      "Técnicas especializadas",
      "Estrategias complejas",
      "Entrenamiento físico",
      "Roles especializados",
      "Partidos competitivos",
    ],
  },
];
