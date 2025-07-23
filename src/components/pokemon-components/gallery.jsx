import {React, useState, useEffect} from "react";
import Pokemon from "./pokemon";
import "./style.css";

const Gallery = ({filteredData}) => {
    return (
        <div className="gallery">
            {filteredData.length === 0 && <div>Loading Pokémons...</div>}
            {filteredData.map((pokemon, index) => (
                    <Pokemon
                        key={index}
                        id={pokemon.id}
                        image={pokemon.image}
                        name={pokemon.name}
                        type1={pokemon.type1}
                        type2={pokemon.type2}
                        // evolution={evolution}
                        weight={pokemon.weight}
                        height={pokemon.height}
                    />
            ))}
        </div>
    )
}

export default Gallery;