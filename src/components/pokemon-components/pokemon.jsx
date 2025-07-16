import React from "react";
import "./style.css";

const Pokemon = ({image, name, type1, type2, weight, height}) => {
    const hgTokg = (hectos) => {
        return Math.floor((hectos / 10) * 100) / 100;
    };

    const dmToM = (decimeters) => {
        return Math.floor((decimeters/10) * 100) / 100;
    };

    return (
        <div className="pokemon-listing">
            <img src={image}/>
            <div className="name">{name}</div>
            <div className="type">{type1}</div>
            <div className="type">{type2}</div>
            {/* <div className="evolution">{evolution}</div> */}
            <div className="weight">{weight}kg</div>
            <div className="height">{height}m</div>
        </div>
    );
};

export default Pokemon;