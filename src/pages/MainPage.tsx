import {Navbar} from "../widgets/Navbar";
import {Outlet, useOutlet} from "react-router-dom";
import MotionContainer from "../shared/common/MotionContainer.tsx";

const MainPage = () => {

    const outlet = useOutlet();

    return(
        <div className={"flex flex-col justify-center items-center"}>
            <Navbar/>
            {outlet ? <Outlet/> :
            <MotionContainer>
                <div className={'flex flex-col items-center w-full'}>
                    <h1 className={'text-xl font-semibold py-4'}>Welcome to the Editor!</h1>
                    <p className={'text-lg font-semibold w-[700px] py-4'}>
                        Here you can programm our machines and save your programmed sequences.
                        Go to the <strong> Editor </strong> to create a sequence or to <strong>
                        My sequences </strong> to see your created sequences.
                    </p>
                </div>
            </MotionContainer>
            }
        </div>
    )
}

export default MainPage;