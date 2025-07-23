import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./style.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const entry = await response.json();

        const data = {
          name: entry.name,
          images: entry.sprites,
          types: entry.types,
          weight: entry.weight,
          stats: entry.stats,
          abilities: entry.abilities,
          cries: entry.cries,
        };

        const dex_response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        const dex_json = await dex_response.json();

        const dex_entry = {
          description: dex_json.flavor_text_entries[0]?.flavor_text,
          color: dex_json.color.name,
          generation: dex_json.generation.name,
          habitat: dex_json.habitat.name,
        };

        setPokemon(data);
        setPokedex(dex_entry);

        console.log(pokedex);
      } catch (err) {
        console.error("Failed to fetch Pokémon data:", err);
      } finally {
        setLoading(false);
      }
    };

    callAPI();
  }, [id]);

  if (loading || !pokemon || !pokedex) {
    return (
      <div>
        <Navbar />
        Loading...
      </div>
    ); // or your own spinner component
  }

  return (
    <div className="page-container">
      <Navbar />
      <div>
        <button onClick={() => navigate(-1)}>← Back to Search</button>
        <div>{pokemon?.name}</div>
        <div className="details-images-container">
          <img src={pokemon?.images.front_default} />
          <img src={pokemon?.images.back_default} />
        </div>
        <div className="details-description">{pokedex?.description}</div>

        <table className="pokemon-info-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{pokemon.name}</td>
            </tr>
            <tr>
              <th>Habitat</th>
              <td>{pokedex?.habitat}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{pokemon.weight / 10} kg</td>
            </tr>
            <tr>
              <th>Types</th>
              <td>{pokemon.types.map((t) => t.type.name).join(", ")}</td>
            </tr>
            <tr>
              <th>Abilities</th>
              <td>{pokemon.abilities.map((a) => a.ability.name).join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonDetails;
