import {useState} from "react";
import {Icon} from "../../../shared/assets/icons";

import {Transitions} from "../../../entities/Sequenzes/sequence.types.ts";

type SavedStepProps = {
    StepType: number,
    StepId: string,
    ExecuteFunction?: string,
    transitions: Transitions
}


const SavedStep = ({StepType, StepId, ExecuteFunction, transitions}: SavedStepProps) => {

    const [opened, setOpened] = useState<boolean>(false);
    const openContainer = () => {
        setOpened((prevState) => !prevState);
    }

    const failedFn = transitions[1]?.NextStepId || '--';
    const successFn = transitions[0]?.NextStepId || 'Next Step';

    return(
        <div className="flex flex-col gap-2 border-black border-2 rounded p-2 m-2 relative">
            {opened ? <>
                {StepId !== "Done" && <div onClick={openContainer} className="absolute right-1 top-1 cursor-pointer">
                    <Icon name={'minus'}/>
                </div> }
                <div className={'flex gap-4'}>
                    <p>Step:</p><p>{StepType}</p>
                    <p>{StepId}</p>
                </div>
                {ExecuteFunction && <div className={'flex gap-4'}>
                    <p>Function:</p>
                    <p>{ExecuteFunction}</p>
                </div> }
                { StepId !== "Done" && <div className={'flex justify-between'}>
                    <div>
                        <Icon name={"fail"} color={'fail'}/>
                        <p>{failedFn}</p>
                    </div>
                    <div>
                        <Icon name={"check"} color={'success'}/>
                        <p>{successFn}</p>
                    </div>
                </div> }
            </>: <>
                { StepId !== "Done" && <div onClick={openContainer} className="absolute right-1 top-1 cursor-pointer">
                    <Icon name={'plus'}/>
                </div> }
                <div className={'flex gap-4'}>
                    <p>Step:</p><p>{StepType}</p>
                    <p>{StepId}</p>
                </div>
            </>}

        </div>
    )
}

export default SavedStep;