import React from "react";
// import '../../../sass/components/_card.scss'

function Card(props) {
  return (
    <div className="card">
      {props.heading ? <h1 className="card-title">{props.heading}</h1> : null}
      <h1 className="card-heading">{props.title}</h1>
      <p className="card-desc">{props.description}</p>
      {props.readmore ? <button className="card-btn">Learn more</button> : null}
    </div>
  );
}

export default Card;
