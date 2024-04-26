import React from "react";
import {Icon} from "../../../shared/assets/icons";
import useSequenzStore from "../../../entities/Sequenzes/useSequenz.store.ts";



const Step = ({stepOptions}) => {

    const {RecipeSteps , changeStepFailedFn} = useSequenzStore(state => state);

    // добавить кнопку чтобы вынуть степ из потока выполнения так сказать.

    const changeFnAfterFailed = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        changeStepFailedFn(stepOptions.StepType, value);
    }

    return(
        <div className="flex flex-col gap-2 border-black border-2 rounded p-2 m-2">
            <div className={'flex gap-4'}>
                <p>StepType:</p>
                <p>{stepOptions.StepType}</p>
            </div>
            <div>
                <p>StepId:</p>
                <p>{stepOptions.StepId}</p>
            </div>
            <div>
                <p>Executing Function:</p>
                <p>{stepOptions.ExecuteFunction}</p>
            </div>
            { stepOptions.StepId !== "Done" && <div className={'flex justify-between gap-14'}>
                <p className={'w-20'}>
                    <Icon name={"fail"} color={'fail'}/>
                    <select onChange={changeFnAfterFailed}>
                        {RecipeSteps.map((step, idx) => {
                            return(
                                <option key={idx} value={step.StepId}>{step.StepId}</option>
                            )
                        })}
                        <option value={"Done"}>{"Done"}</option>
                    </select>
                </p>
                <p className={'w-20'}>
                   <Icon name={"check"} color={'success'}/>
                    Next Index
                </p>
            </div> }
        </div>
    )

    // тут должна быть опция выбора функции при фэйле, из тех, что уже есть в сиквенц. Так же нужно в степ добавить
    // тогл, чтобы убрать степ из цепи выполнения и чтобы выполнялся например только при фейле. Потом сделать способ
    // убирать степ из секвенц, через функцию ремув в сторе, также OpenedFunc.tsx должен снова закрываться.
    // далее подправить стили, подправить код и стиль кода, имена функций и.т.д.
}

export default Step;