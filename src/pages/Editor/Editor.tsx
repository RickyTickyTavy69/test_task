import {EditorContent} from "./EditorContent";
import {Step} from "./Step";

import useSequenzStore from "../../entities/Sequenzes/useSequenz.store.ts";

const Editor = () => {
    const {RecipeName, RecipeSteps, saveRecipe, clearRecepieSteps} = useSequenzStore();

    // console.log("recipeName in Editor", recipeName);

    // нужно сделать так, чтобы можно было добавить все степы в секвенц которые нужны, потом
    // можно выбрать степ после фейла из тех что есть, а если этот степ должен выполняться только после фейла, то
    // можно его вынуть из секвенц, через тоггл на нём.

    const doneStep =  {
        "StepType": 5,
        "StepId": "Done",
        "ReturnCode": 0
    }

    const saveSequence = () => {
        saveRecipe()
    }

    return(
        <>
            <div className={'flex h-mainContent w-full'}>
                <section className={'h-full w-full border-black border-2 flex items-center px-20 justify-between'}>
                    <div className={'flex-col'}>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <h2>Your Sequenz name:</h2>
                            <div>{RecipeName}</div>
                        </div>
                        <div>
                            <h2>Sequenz Steps</h2>
                            <div className={`border-black rounded border-2 overflow-hidden
                        p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[250px]`}>
                                {RecipeSteps.map((step, index) => {
                                    return (
                                        <Step key={index} stepOptions={step}/>
                                    )
                                })}
                                <Step stepOptions={doneStep}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <button onClick={saveSequence} className={'border-4 border-black rounded hover:border-red-800 py-1 px-2'}>
                            Save Your Sequence
                        </button>
                        <button onClick={clearRecepieSteps} className={'border-4 border-black rounded hover:border-red-800 py-1 px-2'}>
                            Clear Sequence steps
                        </button>
                    </div>
                </section>
                <section className={'h-full w-full border-black border-2 flex justify-center'}>
                    <EditorContent/>
                </section>
                {/* здесь нужно сделать опцию выбора из тех машин, приведённых в json и соответственно, смотря какую
             машину выберет, чтобы можно было выбирать функции и функции запрашивали бы параметры чтобы получилось
             так же как в примере секвенц, плюс решить как эту секвенс визуализировать. */}
            </div>
        </>
    )
}

export default Editor;