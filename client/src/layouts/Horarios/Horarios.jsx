import HorariosStyles from "./Horarios.module.css";

export const Horarios = () => {
  const container = `
    flex justify-evenly items-center py-20 px-16
  `;

  return (
    <>
      <h2 className={`text-center font-semibold text-4xl pt-20`}>
        HORARIOS Y PLANES
      </h2>
      <div className={`${container}`}>
        {data.map((d) => (
          <div
            className={`${HorariosStyles.card} mx-4 flex justify-center items-center p-2 flex-col`}
          >
            <div className={`${HorariosStyles.header} py-6`}>
              <h2 className={`text-2xl `}>{d.title}</h2>
            </div>
            <div className={`${HorariosStyles.body} pb-4 px-8 text-center`}>
              <h4 className={`text-center text-xl font-bold pb-8`}>
                {d.price}$
              </h4>
              <p>{d.p}</p>
            </div>
            <div className={`${HorariosStyles.footer} pb-6`}>
              <button
                type="button"
                className={`${HorariosStyles.button} py-2 px-4`}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const data = [
  {
    title: "Plan Diario",
    price: 1.99,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est facere qui vitae maxime, maiores iure ex repellendus sequi, recusandae harum eligendi culpa tenetur sit dolore, animi dolorem. Deserunt, quas!",
  },
  {
    title: "Plan Semanal",
    price: 4.99,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est facere qui vitae maxime, maiores iure ex repellendus sequi, recusandae harum eligendi culpa tenetur sit dolore, animi dolorem. Deserunt, quas!",
  },
  {
    title: "Plan Mensual",
    price: 14.99,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est facere qui vitae maxime, maiores iure ex repellendus sequi, recusandae harum eligendi culpa tenetur sit dolore, animi dolorem. Deserunt, quas!",
  },
  {
    title: "Plan Anual",
    price: 124.99,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est facere qui vitae maxime, maiores iure ex repellendus sequi, recusandae harum eligendi culpa tenetur sit dolore, animi dolorem. Deserunt, quas!",
  },
];
