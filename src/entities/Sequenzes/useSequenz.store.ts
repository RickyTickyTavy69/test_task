import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

type Succeeded = {
    "hrFunction": "Succeeded",
    "NextStepId": string,
}

type Failed = {
    "hrFunction": "Failed",
    "NextStepId": string,
}

type StepsType = {
    StepType: number,
    StepId: string,
    ExecuteFunction?: string,
    Transitions: Array<Succeeded | Failed>,
    Parameter?: Object,
    ReturnCode?: number,
}

type Store = {
    savedRecipes: [],
    RecipeName: string,
    RecipeSteps : Array<StepsType>,
    addStep: (step: StepsType) => void,
    changeRecipeName: (recipeName: string) => void,
    changeStepFailedFn: (changedStep: string, failedFn: string) => void,
    clearRecepieSteps: () => void,
    saveRecipe: () => void,
}

const useSequenzStore = create(
persist(
    (set) => ({
        savedSequences: [],
        RecipeName: "",
        RecipeSteps : [],
        addStep: (step) => set((state) => {
             return {
                 ...state,
                 RecipeSteps: [...state.RecipeSteps, step],
             }
        }),
        changeRecipeName: (Name: string) => set((state) => {
            return{
                ...state,
                RecipeName: Name,
            }

        }),
        changeStepFailedFn: (changedStep: string, failedFn: string) => set((state) => {
            const newSteps = state.RecipeSteps.map(
                (step) => {
                    if(step.StepId === changedStep){
                        step.Transitions[1] = {
                            "hrFunction": "Failed",
                            "NextStepId": failedFn,
                        }
                    }
                    return step;
                }
            );

            return{
                ...state,
                RecipeSteps: [...newSteps],
            }
        }),
        // will use persist of zustand or localStorage to save this sequence/recipe
        saveRecipe: () => set((state) => {
                const sequence = {
                    RecipeName: state.RecipeName,
                    StartSequenceId: "SequenceA",
                    StartStepId: state.RecipeSteps[0].StepId,
                    Step: state.RecipeSteps,
                }

                return {
                    ...state,
                    savedSequences: [...state.savedSequences, sequence],
                }

        }),
        clearRecepieSteps: () => set((state) => {
                return {
                    ...state,
                    RecipeSteps: [],
                }
        })
    }),
    {
        name: 'sequences-storage',
        }

    )
);
    // maybe use partialize from zustand to just save saved by user data
export default useSequenzStore;