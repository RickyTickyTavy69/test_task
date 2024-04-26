import {Step} from "./Editor/Step";

const Sequence = ({sequence}) => {

    return(
        <div>
            here
                <div className={'flex-col'}>
                    <div className={'flex justify-between gap-8 my-5'}>
                        <div>Your Sequenz name:</div>
                        <div>{sequence.RecipeName}</div>
                    </div>
                    <div className={'flex justify-between gap-8 my-5'}>
                        <div>Start ID:</div>
                        <div>{sequence.StartSequenceId}</div>
                    </div>
                    <div className={'flex justify-between gap-8 my-5'}>
                        <div>Your Sequenz name:</div>
                        <div>{sequence.StartStepId}</div>
                    </div>
                    <div>
                        <h2>Sequenz Steps</h2>
                        <div className={`border-black rounded border-2 overflow-hidden
                        p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[250px]`}>
                            {sequence.Step.map((step, index) => {
                                return (
                                    <Step key={index} stepOptions={step}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Sequence;