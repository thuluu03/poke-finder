import "./style.css"

const Dashboard = ({count, avgWeight, avgHeight}) => {
    return (
        <div className="dashboard-container">
            <div className="count">Total pokemons: {count}</div>
            <div className="average-weight">Average weight: {avgWeight}</div>
            <div className="average-height">Average height: {avgHeight}</div>
        </div>
    )
}

export default Dashboard;