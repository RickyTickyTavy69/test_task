import SavedStep from "./Editor/SavedStep/SavedStep.tsx";
import {Styles} from "../shared/styles/styles.ts";
import useSequenzStore from "../entities/Sequenzes/useSequenz.store.ts";


const Sequence = ({sequence}) => {
    const {deleteRecipe} = useSequenzStore();

    const deleteSequence = () => {
        deleteRecipe(sequence.RecipeName);
    }

    return(
                <div className={'flex w-full justify-center gap-14'}>
                    <section>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <div>Sequence:</div>
                            <div>{sequence.RecipeName}</div>
                        </div>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <div>Start ID:</div>
                            <div>{sequence.StartSequenceId}</div>
                        </div>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <div>Start Step ID:</div>
                            <div>{sequence.StartStepId}</div>
                        </div>
                        <button onClick={deleteSequence} className={`${Styles.BUTTON_BORDER_SMALL} mt-20`}>
                            Delete Sequence
                        </button>
                    </section>

                    <section>
                        <h2>Sequenz Steps</h2>
                        <div className={`border-black rounded border-2 overflow-hidden
                        p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[350px]`}>
                            {sequence.Step.map((step, index) => {
                                return (
                                    <SavedStep
                                        key={index}
                                        StepType={step.StepType}
                                        StepId={step.StepId}
                                        transitions={step.Transitions}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </div>
    )
}

export default Sequence;