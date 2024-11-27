export const Categoria = () => {
  return (
    <div>
      <h2 className={`font-semibold text-center text-4xl`}>NIVELES DE JUEGO</h2>
      <div className="flex justify-center">
        {data.map((nivel, index) => (
          <div className={`flex flex-col`} key={index}>
            <h3
              className={`text-center font-medium text-2xl mt-20 pb-6`}
            >{`NIVEL ${index + 1}`}</h3>
            <h2
              className={`text-center font-medium pb-6`}
            >{`NIVEL ${nivel.nombre.toUpperCase()}`}</h2>
            <ul className="text-left">
              <li>
                Enfoque:
                <ul>
                  {nivel.enfoque.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              </li>
              <li>
                Contenido:
                <ul>
                  {nivel.contenido.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
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
