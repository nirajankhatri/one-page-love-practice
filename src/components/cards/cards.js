import React from "react";
import Card from "./card/card";

import uuid from 'react-uuid';

const cardsData = [
  {
    title: "Finish projects faster",
    description:
      "Starter has halped designers stop away from being a 3x designer.",
    readmore: true,
  },
  {
    title: "Make work efficient",
    description:
      "Starter has halped designers stop away from being a 3x designer.",
    readmore: true,
  },
  {
    title: "Make smart projects",
    description:
      "Starter has halped designers stop away from being a 3x designer.",
    readmore: true,
  },
];

const Cards = () => {
  const cards = cardsData.map((card) => (
    <Card key={uuid()} title={card.title} description={card.description} readmore />
  ));

  return <div className="card-container">{cards}</div>;
};

export default Cards;
