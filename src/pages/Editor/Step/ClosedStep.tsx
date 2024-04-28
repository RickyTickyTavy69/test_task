import {Icon} from "../../../shared/assets/icons";

type ClosedStepProps = {
    StepId: string;
    StepType: number;
}

const ClosedStep = ({StepId, StepType}: ClosedStepProps) => {
    return(
        <div className={'flex flex-col gap-2 border-black border-2 rounded p-2 m-2 relative'}>
            { StepId !== "Done" && <div className="absolute right-1 top-1 cursor-pointer">
                <Icon name={'plus'}/>
            </div> }
            <div className={'flex gap-4'}>
                <p>Step:</p><p>{StepType}</p>
                <p className={'max-w-[250px] max-h-[30px] overflow-hidden'}>{StepId}</p>
            </div>
        </div>
    )
}

export default ClosedStep;