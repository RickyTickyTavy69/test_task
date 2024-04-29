import React from "react";
import useSequenzStore from "../entities/Sequenzes/useSequenz.store.ts";
import {useState} from "react";
import Sequence from "./Sequence.tsx";
import MotionContainer from "../shared/common/MotionContainer.tsx";

import {SequenceType} from "../entities/Sequenzes/sequence.types.ts";

const SequenzPage = () => {

    const {savedRecipes} = useSequenzStore();

    const [chosenSequence, setChosenSequence] = useState<SequenceType>();

    const chooseSequence = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const recipeName = e.currentTarget.innerText;
        const chosenSequence = savedRecipes.find((sequence) => {
            return sequence.RecipeName === recipeName;
        })
        setChosenSequence(chosenSequence);
    }

    return(
        <MotionContainer>
            <section className={'h-full w-full border-black border-2 flex flex-col items-center'}>
                <h2>You Sequences Menu</h2>
                <ul className={`border-black rounded border-2 overflow-hidden
                        p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[250px]`}>
                    {savedRecipes.map((sequence, idx) => {
                        return (
                            <li key={idx}>
                                <button onClick={chooseSequence} className={'border-4 border-black rounded py-1 px-2'}>
                                    {sequence.RecipeName}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={'h-full w-full border-black border-2 flex flex-col'}>
                <h2 className={'text-center py-4'}>
                    Chosen Sequence
                </h2>
                {chosenSequence && <Sequence sequence={chosenSequence}/>}
            </section>
        </MotionContainer>
    )
}

export default SequenzPage;