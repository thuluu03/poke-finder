import {react, useState, useEffect} from "react";
import Dashboard from "../components/dashboard/dashboard";
import FilterBar from "../components/filterBar";
import Gallery from "../components/pokemon-components/gallery";
import Navbar from "../components/navbar";

const Search = () => {
    const [params, setParams] = useState({});
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [avgWeight, setAvgWeight] = useState(null);
    const [avgHeight, setAvgHeight] = useState(null);

    const hgTokg = (hectos) => {
        return Math.floor((hectos / 10) * 100) / 100;
    };

    const dmToM = (decimeters) => {
        return Math.floor((decimeters/10) * 100) / 100;
    };

    useEffect(() => {
        const callAPI = async () => {
            let query = "https://pokeapi.co/api/v2/pokemon/";
            let response = await fetch(query);
            let json = await response.json();

            const detailedPokemons = await Promise.all(
                json.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const details = await res.json();

                    return {
                        name: details.name,
                        image: details.sprites.front_default,
                        type1: details.types[0]?.type.name || "",
                        type2: details.types[1]?.type.name || "",
                        weight: hgTokg(details.weight),
                        height: dmToM(details.height),
                    };
                })
            );

            setData(detailedPokemons)
        };
        callAPI().catch(console.error)
    }, [])

    useEffect(() => {
        console.log("params: ", params);
        const filtered = data.filter(pokemon => {
        const matchesName =
            !params.name || pokemon.name.toLowerCase().includes(params.name.toLowerCase());

        const matchesWeight =
            !params["max-weight"] || pokemon.weight <= params["max-weight"];

        const matchesHeight =
            !params["max-height"] || pokemon.height <= params["max-height"];

        const matchesType1 =
            !params.type1 || pokemon.type1 === params.type1;

        const matchesType2 =
            !params.type2 || pokemon.type2 === params.type2;

        return matchesName && matchesWeight && matchesHeight && matchesType1 && matchesType2;
        });

        setFilteredData(filtered);

        if (filtered.length > 0) {
            const totalWeight = filtered.reduce((sum, p) => sum + p.weight, 0);
            let avg = totalWeight / filtered.length;
            setAvgWeight(Math.floor(avg * 100)/ 100);

            const totalHeight = filtered.reduce((sum, p) => sum + p.height, 0);
            avg = totalHeight / filtered.length;
            setAvgHeight(Math.floor(avg * 100)/ 100);
        } else {
            setAvgWeight(null);
            setAvgHeight(null);
        };
    }, [data, params]);

    return (
        <div className="page-container">
            <Navbar/>
            <Dashboard
                count={filteredData.length}
                avgWeight={avgWeight}
                avgHeight={avgHeight}
            />
            <FilterBar setParams={setParams}/>
            <Gallery filteredData={filteredData}/>
        </div>
    )
}

export default Search;