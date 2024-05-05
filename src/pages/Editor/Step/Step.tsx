import {OpenCloseContainer} from "../../../shared/common";
import OpenedStep from "./OpenedStep.tsx";
import ClosedStep from "./ClosedStep.tsx";
import {useGetStep} from "../../../entities/Sequenzes/hooks";


const Step = ({StepId} : { StepId: string }) => {

    const step = useGetStep(StepId);

    return(
        <>
            {
                step &&
                <OpenCloseContainer
                    closedComponent={<ClosedStep
                        StepId={step.StepId}
                        StepType={step.StepType}
                    />}
                    openedComponent={<OpenedStep
                        StepId={step.StepId}
                        StepType={step.StepType}
                        ExecuteFunction={step.ExecuteFunction}
                        transitions={step.Transitions}
                    />}
                />
            }
            {
                StepId === "Done" &&
                <ClosedStep StepId={"Done"} StepType={5}/>
            }
        </>
    )
}

export default Step;