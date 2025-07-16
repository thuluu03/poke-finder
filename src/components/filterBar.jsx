import {react, useState} from "react";

// params is a hashtable for all input params for filtering
const FilterBar = ({setParams}) => {
    const [inputs, setInputs] = useState({
        "name": null,
        "max-weight": 100,
        "max-height": 100,
        "type1": null,
        "type2": null,
    })

    const handleNameInput = (e) => {
        setInputs(prev => ({
            ...prev,
            ["name"]: e.target.value
        }));
    };

    const handleWeight = (e) => {
        setInputs(prev => ({
            ...prev,
            ["max-weight"]: e.target.value
        }));
    };

    const handleHeight = (e) => {
        setInputs(prev => ({
            ...prev,
            ["max-height"]: e.target.value
        }));
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(inputs)
        setParams(inputs)
    };

    return (
        <div className="filter-container">
            <form onSubmit={handleSubmission}>
                <input 
                    type="text" 
                    defaultValue={""}
                    onChange={handleNameInput}
                    placeholder="search by name..."
                /> {/* filter based on a name */}
                <label>
                    <input 
                    id="weight"
                    type="range" 
                    defaultValue={100}
                    onChange={handleWeight}
                    max={100}
                    step={10}
                    /> {/* filter based on weight */}
                    max weight
                </label>
                <label>
                   <input 
                    id="height"
                    type="range" 
                    defaultValue={100}
                    onChange={handleHeight}
                    max={2}
                    step={.25}
                    /> {/* filter based on height */} 
                    max height
                </label>
                
                <button>search</button>
            </form>
        </div>
    )
}

export default FilterBar;
