import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import {StepsType} from "./sequence.types.ts";
import {SequenceType} from "./sequence.types.ts";

type Store = {
    savedRecipes: Array<SequenceType>,
    RecipeName: string,
    RecipeSteps : Array<StepsType>,
    addStep: (step: StepsType) => void,
    changeRecipeName: (recipeName: string) => void,
    changeStepFailedFn: (changedStep: string, failedFn: string) => void,
    changeStepSuccessFn: (changedStep: string, successFn: string) => void,
    clearRecepieSteps: () => void,
    saveRecipe: () => void,
    deleteRecipe: (recipeName : string) => void,
}

const useSequenzStore = create<Store>()(
persist(
    (set) => ({
        savedRecipes: [],
        RecipeName: "",
        RecipeSteps : [],
        addStep: (step) => set((state) => {
            // нужно как то при добавлении нового степ в предыдущем степе его след при саксесс добавлять имя этого.
            if(state.RecipeSteps.length > 0){
                state.RecipeSteps.at(-1)!.Transitions[0].NextStepId = step.StepId
            }
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
        changeStepSuccessFn: (changedStep: string, successFn: string) => set((state) => {
            const newSteps = state.RecipeSteps.map(
                (step) => {
                    if(step.StepId === changedStep){
                        step.Transitions[0] = {
                            "hrFunction": "Succeeded",
                            "NextStepId": successFn,
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
        saveRecipe: () => set((state) => {
                const sequence = {
                    RecipeName: state.RecipeName,
                    StartSequenceId: "SequenceA",
                    StartStepId: state.RecipeSteps[0].StepId,
                    Step: state.RecipeSteps,
                }

                return {
                    ...state,
                    savedRecipes: [...state.savedRecipes, sequence],
                }

        }),
        deleteRecipe: (recipeName: string) => set((state) => {
            // реализовать функцию удаления, пофиксить адаптивность,
            // сделать добавление параметров, пофиксить ошибки линтера все, что красное
            // пофиксить стиль кода.
            const newRecipes = state.savedRecipes.filter((recipe) => {
                return recipe.RecipeName !== recipeName;
            })

            return {
                ...state,
                savedRecipes: newRecipes,
            }
        }) ,
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