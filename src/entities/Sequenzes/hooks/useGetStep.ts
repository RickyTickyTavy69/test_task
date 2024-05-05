import useSequenzStore from "../useSequenz.store.ts";

const useGetStep = (StepId: string) => {
    const {RecipeSteps} = useSequenzStore();
    return RecipeSteps.find((step) => {
        return StepId === step.StepId;
    })
}

export default useGetStep;