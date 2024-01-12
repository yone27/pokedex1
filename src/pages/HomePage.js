import React from "react";
import CardHome from "../components/Cards/CardHome";

const HomePage = () => {
  return (
    <div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <CardHome
            data={{
              title: "Películas",
              description: "breve desc de pelis",
              url: "/peliculas",
            }}
          />
          <CardHome
            data={{
              title: "Series",
              description: "breve desc de series",
              url: "/series",
            }}
          />
        </div>
        Inicio
      </div>
    </div>
  );
};

export default HomePage;
