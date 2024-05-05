import {Icon} from "../../../shared/assets/icons";
import {Styles} from "../../../shared/styles/styles.ts";
import useSequenzStore from "../../../entities/Sequenzes/useSequenz.store.ts";
import React from "react";

import {stopPropagate} from "../../../shared/lib/utils.ts";
import {Transitions} from "../../../entities/Sequenzes/sequence.types.ts";

type OpenedStepProps = {
    StepId: string;
    StepType: number;
    ExecuteFunction?: string;
    transitions: Transitions;
}

const OpenedStep = ({StepId, StepType, ExecuteFunction, transitions}: OpenedStepProps) => {

    const {RecipeSteps , changeStepFailedFn, changeStepSuccessFn} = useSequenzStore(state => state);

    const changeFnAfterFailed = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        changeStepFailedFn(StepId, value);
    }

    const changeFnAfterSuccess = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        changeStepSuccessFn(StepId, value);
    }

    const failedFn = transitions[1]?.NextStepId;
    const successFn = transitions[0]?.NextStepId;

    return(
        <div className={'flex flex-col gap-2 border-black border-2 rounded p-2 m-2 relative'}>
            {StepId !== "Done" && <div className="absolute right-1 top-1 cursor-pointer">
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
                    <select
                        onClick={stopPropagate}
                            className={`${Styles.SELECT_BORDER}`} defaultValue={failedFn} onChange={changeFnAfterFailed}>
                        {RecipeSteps.map((step, idx) => {
                            return(
                                <option key={idx} value={step.StepId}>{step.StepId}</option>
                            )
                        })}
                        <option value={"Done"}>{"Done"}</option>
                        <option value={"none"}>{'none'}</option>
                    </select>
                </div>
                <div>
                    <Icon name={"check"} color={'success'}/>
                    <select defaultValue={successFn} onClick={stopPropagate} className={`${Styles.SELECT_BORDER}`} onChange={changeFnAfterSuccess}>
                        <option value="Next Index">Next Index</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            </div> }
        </div>
    )
}

export default OpenedStep;