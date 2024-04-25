import useSequenzStore from "../../../entities/Sequenzes/useSequenz.store.ts";

const OpenedFunc = ({FuncValue, selectedMachine, funcName}) => {

    /*
    * {
            "StepType": 1,
            "StepId": "move_to_bsc",
            "ExecuteFunction": "Gantry/MoveSafeHeight",
            "Transitions": [
                {
                    "hrFunction": "Succeeded",
                    "NextStepId": "enable_bsc_light"
                }
            ],
            "Parameter": {
                "Position_X": 120.0,
                "Position_Y": 243.6,
                "Position_Z": -126.0
            }
        },
    * */

    const {addStep} = useSequenzStore();

    const description = FuncValue.FunctionDescription || {};
    const functionParameters = FuncValue.FunctionParameters || {};

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
                {
                    "hrFunction": "Failed",
                    "NextStepId": "Done"
                }
            ],
            Parameter: {},
        }
        addStep(Step);
    }

    return(
        <div className={'border-2 border-black p-4'}>
            {description && <div>
                <div>{description.Name}</div>
                <div>{description.Description}</div>
                <div>{description.FunctionType}</div>
                <div>{description.Category}</div>
                <div>
                    <button onClick={addFunctionStep} className={"rounded border-black border-2 m-4 p-2 hover:border-red-800"}>add to sequenz</button>
                </div>
            </div>}
        </div>
    )
}

export default OpenedFunc;