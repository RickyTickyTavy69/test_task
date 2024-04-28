import {useState} from "react";
import OpenedFunc from "../OpenedFunc/OpenedFunc.tsx";
import {Functions} from "./functions.types.ts";

type MachineProps = {
    functions: Functions;
    selectedMachine: string;
}

const Machine = ({functions, selectedMachine}: MachineProps) => {

    const [selectedFunction, setSelectedFunction] = useState<string | null>(null);


    const handleSelectFunction = (key: string) => {
        if (selectedFunction) {
            setSelectedFunction(null);
        } else {
            setSelectedFunction(key);
        }

    }

    return(
        <div>
            {
                Object.entries(functions).map(([key]) => {
                    return (
                        <div key={key}>
                            <div onClick={() => handleSelectFunction(key)} className={'border-black border-4 m-4 cursor-pointer hover:border-red-800'}>{key}</div>
                            {selectedFunction === key && <OpenedFunc funcName={selectedFunction} selectedMachine={selectedMachine} FuncValue={functions[selectedFunction]}/>}
                        </div>
                        )
                })
            }

        </div>
    )
}

export default Machine;