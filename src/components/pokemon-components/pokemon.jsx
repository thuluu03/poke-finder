import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Pokemon = ({id, image, name, type1, type2, weight, height}) => {

    return (
        <Link
            to={`/search/pokemon-details/${id}`}
            key={id}
        >
            <div className="pokemon-listing">
                <img src={image}/>
                <div className="name">{name}</div>
                <div className="type">{type1}</div>
                <div className="type">{type2}</div>
                <div className="weight">{weight}kg</div>
                <div className="height">{height}m</div>
            </div>
        </Link>
    );
};

export default Pokemon;