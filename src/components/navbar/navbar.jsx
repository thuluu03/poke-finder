import { NavLink } from "react-router";
import "./style.css"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/search" end>Search</NavLink>
        </nav>
    )
}

export default Navbar;