import PlanessStyles from "./Planes.module.css";

export const Planes = () => {
  const container = `
    flex justify-evenly items-center py-20 px-16
  `;

  return (
    <>
      <h2 className={`text-center font-semibold text-4xl pt-20`}>PLANES</h2>
      <div className={`${container}`}>
        {data.map((d, index) => (
          <div
            className={`${PlanessStyles.card} mx-4 flex justify-center items-center p-2 flex-col`}
            key={index}
          >
            <div className={`${PlanessStyles.header} py-6`}>
              <h2 className={`text-2xl `}>{d.title}</h2>
            </div>
            <div className={`${PlanessStyles.body} pb-4 px-8 text-center`}>
              <h4 className={`text-center text-xl font-bold pb-8`}>
                {d.price}$
              </h4>
              <p>{d.p}</p>
            </div>
            <div className={`${PlanessStyles.footer} pb-6`}>
              <button
                type="button"
                className={`${PlanessStyles.button} py-2 px-4`}
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
