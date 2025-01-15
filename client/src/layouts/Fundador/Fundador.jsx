import FundadorStyles from "./Fundador.module.css";

export const Fundador = () => {
  return (
    <>
      <div className={`flex p-20 flex-col justify-center`}>
        <h2 className={`text-center font-semibold text-4xl`}>
          CONOCE A NUESTRO FUNDADOR
        </h2>
        <div className={`flex justify-center pt-24 pb-10`}>
          <img
            src="../../../assets/pictures/Nishida.png"
            className={`${FundadorStyles.picture}`}
            alt=""
          />
        </div>
        <div className={`text-center`}>
          <p className={`font-semibold text-2xl`}>YUJI NISHIDA </p>
          <p>Director Técnico</p>
        </div>
      </div>
    </>
  );
};
