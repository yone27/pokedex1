import React, { useContext } from "react";
import { Entries } from "../components/Cards/Entries";
import { FilterBar } from "../components/FilterBar";
import { EntriesContext } from "../context/EntriesContext";

const MoviesPage = () => {
  const { setActive, active } = useContext(EntriesContext);
  return (
    <div>
      <div className="container">
        <FilterBar />
      </div>
      <Entries />
    </div>
  );
};

export default MoviesPage;
