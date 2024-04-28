import React, {useState} from "react";
import {motion} from "framer-motion";

type openCloseContainerProps = {
    closedComponent: React.ReactNode;
    openedComponent: React.ReactNode;
}

const OpenCloseContainer = ({ closedComponent, openedComponent} : openCloseContainerProps) => {

    const [open, setOpen] = useState<boolean>()

    const handleOpen = () => {
        setOpen((prevState) => !prevState);
    }

    const variants = {
        open: { height: '160px'},
        closed: { height: '60px' },
    }

    return(
        <div onClick={handleOpen}>
                <motion.div
                    animate={open ? "open" : "closed"}
                    variants={variants}
                >
                    {open? openedComponent: closedComponent}
                </motion.div>
        </div>
    )
}

export default OpenCloseContainer;