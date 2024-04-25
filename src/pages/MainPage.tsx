import {Navbar} from "../widgets/Navbar";
import {Outlet, useOutlet} from "react-router-dom";

const MainPage = () => {

    const outlet = useOutlet();

    return(
        <div className={"flex flex-col justify-center items-center"}>
            <Navbar/>
            {outlet ? <Outlet/> : <div>Welcome to the main page</div>}
        </div>
    )
}

export default MainPage;