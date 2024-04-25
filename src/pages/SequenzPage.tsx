import React from "react";
import useSequenzStore from "../entities/Sequenzes/useSequenz.store.ts";
import {useState} from "react";

const SequenzPage = () => {

    const {savedSequences} = useSequenzStore();

    const [chosenSequence, setChosenSequence] = useState();

    const chooseSequence = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const recipeName = e.currentTarget.value;
        const choosenSequence = savedSequences.find((sequence, idx) => {
            return sequence.RecipeName === recipeName;
        });
        setChosenSequence(choosenSequence);
    }

    return(
        <div className={'flex h-mainContent w-full'}>
            <section className={'h-full w-full border-black border-2 flex flex-col items-center'}>
                <h2>You Sequences Menu</h2>
                <ul className={`border-black rounded border-2 overflow-hidden
                        p-2 m-2 min-h-[700px] max-h-[700px] overflow-y-scroll min-w-[250px]`}>
                    {savedSequences.map(sequence => {
                        return(
                            <li>
                                <button onClick={chooseSequence} className={'border-4 border-black rounded py-1 px-2'}>
                                    {sequence.RecipeName}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={'h-full w-full border-black border-2 flex justify-center'}>
                Chosen Sequence
                {chosenSequence &&
                    <div>

                    </div>
                }
            </section>
        </div>

    )
} // тут выше нужно вывести выбранную сиквенц, потом доделать стили, немного пофиксить линтер и залить на гитхаб

export default SequenzPage;