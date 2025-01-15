import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardStyles from "./Card.module.css";

export const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAtletas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/atletas");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAtletas();
  }, []); // El array vacío significa que se ejecuta solo una vez al montar el componente

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((atleta) => (
        <Link
          key={atleta._id}
          to="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex-col">
            <div className="flex justify-between items-start">
              <div className={`flex-col`}>
                <h6 className={`text-5xl pb-2`}>{atleta.number}</h6>
                <h6 className={`text-1xl pb-8`}>{atleta.position}</h6>
                <div className="flex justify-center">
                  <img
                    src="../../../public/assets/images/vzla.jpg"
                    className={`w-10 pb-8 justify-center`}
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="../../../public/assets/logos/Logo.png"
                    className={`w-10 `}
                  />
                </div>
              </div>
              <div className="flex">
                <img
                  src={`https://unavatar.io/doug127`}
                  className={`w-64 ${CardStyles.picture}`}
                />
              </div>
            </div>
            <div className={`flex justify-center ${CardStyles.title}`}>
              <h6>{atleta.first_name}&nbsp;</h6>
              <h6>{atleta.last_name}</h6>
            </div>
          </div>

          <div className={`flex justify-center`}>
            <h6>{atleta.category}</h6>
          </div>
        </Link>
      ))}
    </>
  );
};
