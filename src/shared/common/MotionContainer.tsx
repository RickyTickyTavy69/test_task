import React from "react";
import {motion} from "framer-motion";

const MotionContainer = ({children}:{children: React.ReactNode }) => {

    return(
        <motion.div
            className="flex h-mainContent w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default MotionContainer;