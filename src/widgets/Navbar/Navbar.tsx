import {NavLink} from "react-router-dom";
import {Styles} from "../../shared/styles/styles.ts";

const Navbar = () => {
    return(
        <nav className="flex justify-around text-xl font-bold w-96 h-navbar items-center">
            <NavLink className={`${Styles.BUTTON_BORDER_SMALL}`} to={"/"}>Main</NavLink>
            <NavLink className={`${Styles.BUTTON_BORDER_SMALL}`} to={"editor"}>Editor</NavLink>
            <NavLink className={`${Styles.BUTTON_BORDER_SMALL}`} to={"result"}>My Sequences</NavLink>
        </nav>
    )
}

export default Navbar;