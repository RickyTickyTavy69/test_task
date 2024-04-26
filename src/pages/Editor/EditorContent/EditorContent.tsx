import React, {useState} from "react";
import machineCap from "../../../shared/MachineCapabilities_Assessment.json";
import useSequenzStore from "../../../entities/Sequenzes/useSequenz.store.ts";

import Machine from "../Machine/Machine.tsx";

const EditorContent = () => {

    const {changeRecipeName} = useSequenzStore();

    // don't know if I need this.
    enum MachineType {
        GantryAxisX = "GantryAxisX",
        GantryAxisY = "GantryAxisY",
        GantryAxisZ = "GantryAxisZ",
        Gantry = "Gantry",
        VGU = "VGU",
        BSC = "BSC",
        PBBs = "PBBs",
        Cameras = "Cameras",
    }

    const [selectedMachine, setSelectedMachine] = useState<MachineType>(MachineType.GantryAxisX);

    const handleSelect = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        const value: MachineType = event.currentTarget.value as MachineType;
        console.log("selected is", value);
        setSelectedMachine(value);
    }

    const functions = machineCap[selectedMachine].Functions;

    const changeName = (e: React.SyntheticEvent<HTMLInputElement>) => {
       const name = e.currentTarget.value;
       console.log("changing name", name);
       changeRecipeName(name);
    }

    return(
        <div className={'my-8'}>
            <div>
                <div>choose sequenz name</div>
                <input className={'border-4 rounded py-1 px-2'} onChange={changeName} type="text"/>
            </div>

            <p className={'my-4 font-bold'}>Choose your machine</p>

            <select defaultValue={'GantryAxisX'} onChange={handleSelect}>
                {
                    Object.entries(machineCap).map(([key]) => {
                        return (
                            <option key={key} value={key}>{key}</option>
                        )
                    })
                }
            </select>

            {selectedMachine && <Machine selectedMachine={selectedMachine} functions={functions}/>}

        </div>
    )

}

export default EditorContent;