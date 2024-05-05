import React from "react";

export function stopPropagate(e: React.SyntheticEvent<HTMLSelectElement>){
    e.stopPropagation();
}