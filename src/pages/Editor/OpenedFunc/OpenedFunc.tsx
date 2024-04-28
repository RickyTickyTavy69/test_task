import useSequenzStore from "../../../entities/Sequenzes/useSequenz.store.ts";
import {FunctionType} from "../Machine/functions.types.ts";

type OpenedFuncType = {
    FuncValue: FunctionType
    selectedMachine: string;
    funcName: string;
}

const OpenedFunc = ({FuncValue, selectedMachine, funcName}: OpenedFuncType) => {

    const {addStep} = useSequenzStore();

    const description = FuncValue?.FunctionDescription;
    // const functionParameters = FuncValue.FunctionParameter || {};

    const addFunctionStep = () => {
        const Step = {
            StepType: 1,
            StepId: FuncValue?.FunctionDescription?.Name || funcName,
            ExecuteFunction: `${selectedMachine}/${funcName}`,
            Transitions: [
                {
                    "hrFunction": "Succeeded",
                    "NextStepId": ""
                },
            ],
            Parameter: {},
        }
        addStep(Step);
    }

    return(
        <div className={'border-2 border-black p-4'}>
            {description && <div>
                <div>{description?.Name}</div>
                <div>{description?.Description}</div>
                <div>{description?.FunctionType}</div>
                <div>{description?.Category}</div>
                <div>
                    <button onClick={addFunctionStep} className={"rounded border-black border-2 m-4 p-2 hover:border-red-800"}>add to sequenz</button>
                </div>
            </div>}
        </div>
    )
}

export default OpenedFunc;