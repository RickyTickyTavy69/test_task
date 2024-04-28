import {EditorContent} from "./EditorContent";
import {Step} from "./Step";
import MotionContainer from "../../shared/common/MotionContainer.tsx";

import useSequenzStore from "../../entities/Sequenzes/useSequenz.store.ts";

const Editor = () => {
    const {RecipeName, RecipeSteps, saveRecipe, clearRecepieSteps, savedRecipes} = useSequenzStore();

    const saveSequence = () => {
        let nameValid: boolean = true;
        savedRecipes.forEach((recipe) => {
            if(recipe.RecipeName === RecipeName){
                alert("please choose a different name");
                nameValid = false;
            }
        })
        if(nameValid){
            saveRecipe();
            clearRecepieSteps();
            alert("recipe was saved");
        }

    }

    return(
        <>
            <MotionContainer>
                <section className={'h-full w-full border-black border-2 flex items-center px-20 justify-between'}>
                    <div className={'flex-col'}>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <h2>Your Sequenz name:</h2>
                            <div>{RecipeName}</div>
                        </div>
                        <div>
                            <h2>Sequenz Steps</h2>
                            <div className={`border-black rounded border-2 overflow-hidden
                            p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[450px]`}>
                                {RecipeSteps.map((step, index) => {
                                    return (
                                        <Step key={index} StepId={step.StepId} StepType={step.StepType} ExecuteFunction={step.ExecuteFunction}/>
                                    )
                                })}
                                <Step StepType={5} StepId={'Done'}/>
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
            </MotionContainer>
        </>
    )
}

export default Editor;