import React, { useState } from "react";
import Form from "./Form";
import Tablo from "./Tablo";

const Voitures = [
  {
    id: "v1",
    Marque: "Dacia_Logan",
    TypeCarburant: "Diesel",
    PrixLocation: 200,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Dacia_Logan_III_%28cropped%29.jpg",
  },
  {
    id: "v2",
    Marque: "Dacia_Sandero",
    TypeCarburant: "Essence",
    PrixLocation: 250,
    image:
      "https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-bji/sandero-bji-ph1/edito-2560-x-1440/dacia-sandero-bji-ph1-001.jpg.ximg.xsmall.jpg/34b9770af8.jpg",
  },
  {
    id: "v3",
    Marque: "Peugeot208",
    TypeCarburant: "Essence",
    PrixLocation: 400,
    image:
      "https://ev-database.org/img/auto/Peugeot_e-208_2024/Peugeot_e-208_2024-01@2x.jpg",
  },
];
function HomeSujet1() {
  const [showForm, setShowForm] = useState(false);
  const [table, setTable] = useState(Voitures);
  const supprimerFun = (id) => {
    setTable(table.filter((voiture) => voiture.id !== id));
  };


  return (
    <section className="w-full flex flex-col">
      {showForm ? <Form setTable={setTable} click={() => setShowForm(!showForm)} /> : null}
      <div className="w-full h-14 flex items-center px-8">
        <button
          className="w-40 h-10 bg-blue-600 text-white rounded-md focus:ring-2 focus:ring-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          Ajouter un voiture +
        </button>
      </div>
      <div className="w-full">
        <Tablo supprimerFun={supprimerFun} voitures={table} />
      </div>
    </section>
  );
}

export default HomeSujet1;
