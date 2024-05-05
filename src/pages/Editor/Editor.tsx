import React from "react";
import {useState} from "react";

import {EditorContent} from "./EditorContent";
import {Step} from "./Step";
import MotionContainer from "../../shared/common/MotionContainer.tsx";
import {Button} from "../../shared/common/Button";
import {Modal} from "../../shared/common/Modal";

import useSequenzStore from "../../entities/Sequenzes/useSequenz.store.ts";
import {Typografy} from "../../shared/common/Typografy";
import {MainTexts} from "../../shared/constants";
import mainTexts from "../../shared/constants/mainTexts.ts";
import {SequenceType} from "../../entities/Sequenzes/sequence.types.ts";


const Editor = () => {
    const {RecipeName, RecipeSteps, saveRecipe, clearRecepieSteps, savedRecipes} = useSequenzStore();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [loadedFile, setLoadedFile] = useState<File>();

    const openModal = () => {
        setModalOpen(true)
    }

    const selectFile = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const file = e.currentTarget?.files[0];
        setLoadedFile(file)
    }

    const upLoadFile = async () => {
        if(!loadedFile){
            alert("no file selected");
            return;
        }

        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result);
            if(text){
                const jsonText = JSON.parse(text)
                saveRecipe(jsonText);
                alert("your sequence was loaded and saved. Go to 'My Sequences' to see it.")
                setModalOpen(false);
            }
        };
        reader.readAsText(loadedFile)

    }

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
                <section className={'h-full w-full border-black border-2 flex px-20 justify-between'}>
                    <div className={'flex-col'}>
                        <div className={'flex justify-between gap-8 my-5'}>
                            <h2>Your Sequenz name:</h2>
                            <div>{RecipeName}</div>
                        </div>
                        <div>
                            <h2>Sequenz Steps</h2>
                            <div className={`border-black rounded border-2 overflow-hidden
                            p-2 m-2 max-height[37.75rem] overflow-y-scroll min-w-[450px] height[max-content]`}>
                                {RecipeSteps.map((step, index) => {
                                    return (
                                        <Step key={index} StepId={step.StepId} />
                                    )
                                })}
                                <Step StepId={'Done'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col justify-between py-[40%]'}>
                        <div className={'flex flex-col gap-4'}>
                            <Button onClick={saveSequence}>
                                Save Your Sequence
                            </Button>
                            <Button onClick={clearRecepieSteps}>
                                Clear Sequence steps
                            </Button>
                            <Button onClick={openModal}>
                                Load from JSON
                            </Button>
                        </div>
                        {modalOpen &&  <Modal
                            onClose={() => setModalOpen(false)}
                            isOpen={modalOpen}>
                            <Typografy>
                                {MainTexts.modalLoadJSON}
                            </Typografy>
                            <input onChange={selectFile} type="file"/>
                            <div>
                                <Button onClick={upLoadFile}>
                                    {mainTexts.upLoad}
                                </Button>
                            </div>
                        </Modal> }
                    </div>
                </section>
                <section className={'h-full w-full border-black border-2 flex justify-center'}>
                    <EditorContent/>
                </section>
            </MotionContainer>
        </>
    )
}

export default Editor;