import React, {useCallback, useEffect} from "react";
import {Portal} from "../Portal"
import classNames from "../../lib/classNames/classNames.ts";
import {motion} from "framer-motion";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps) => {

    const clickHandler = useCallback( () => {
        if(onClose){
            onClose();
        }
    }, [onClose])

    const keyDownHandler = useCallback( (e: KeyboardEvent) => {
        if(e.key === "Escape"){
            clickHandler();
        }
    }, [clickHandler])

    const variants = {
        open: { opacity: 1, scale: 1},
        closed: { opacity: 0, scale: 0.5},
    }

    useEffect(() => {
        if(isOpen){
            window.addEventListener("keydown", keyDownHandler);
        }
        return () => {
            window.removeEventListener("keydown", keyDownHandler);
        }
    }, [isOpen, keyDownHandler]);

    return (
        <Portal>
            <motion.div
                data-testid={"modal-overlay"}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                onClick={clickHandler} className={classNames(`fixed top-0 bottom-0 left-0 right-0 
             flex justify-center items-center -z-10 bg-overlay_color`,
                {
                    'z-50 pointer-events-auto': isOpen,
                }
            )}>
                <motion.div
                    data-testid={"modal-window"}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                 onClick={(e) => e.stopPropagation()}
                     className={'p-4 bg-white text-black rounded h-52 w-fit opacity-0 flex flex-col items-center gap-4'}>
                    {children}
                </motion.div>
            </motion.div>
        </Portal>
    )
}

export default Modal;