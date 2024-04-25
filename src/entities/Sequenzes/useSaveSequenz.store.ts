import { create } from 'zustand';




const useSequenzStore = create()((set) => ({
    sequences: [],
    addSequence: (sequenze) => set((state) => {
        return {
            ...state,
            RecipeSteps: [...state.RecipeSteps, step],
        }
    }),
    removeSequence: (Name: string) => set((state) => {
        return{
            ...state,
            RecipeName: Name,
        }

    })
}));

export default useSequenzStore;