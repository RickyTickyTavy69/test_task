import {OpenCloseContainer} from "../../../shared/common";
import OpenedStep from "./OpenedStep.tsx";
import ClosedStep from "./ClosedStep.tsx";

type StepProps = {
    StepType: number,
    StepId: string,
    ExecuteFunction?: string,
}

const Step = ({StepType, StepId, ExecuteFunction} : StepProps) => {

    return(
        <OpenCloseContainer
            closedComponent={<ClosedStep StepId={StepId} StepType={StepType} />}
            openedComponent={<OpenedStep StepId={StepId} StepType={StepType} ExecuteFunction={ExecuteFunction}/>}
            />
    )
}

export default Step;