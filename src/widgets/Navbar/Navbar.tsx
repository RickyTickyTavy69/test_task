import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="flex justify-around text-2xl font-bold gap-4 max-w-3xl h-navbar">
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"editor"}>Editor</NavLink>
            <NavLink to={"result"}>Result</NavLink>
        </nav>
    )
}

export default Navbar;