export type Succeeded = {
    "hrFunction": "Succeeded",
    "NextStepId": string,
}

export type Failed = {
    "hrFunction": "Failed",
    "NextStepId": string,
}

export type Transitions = Array<Succeeded | Failed>

export type StepsType = {
    StepType: number,
    StepId: string,
    ExecuteFunction?: string,
    Transitions: Transitions,
    Parameter?: Record<string, number | string>,
    ReturnCode?: number,
}

export type SequenceType = {
    RecipeName: string,
    StartSequenceId: string,
    StartStepId: string,
    Step: Array<StepsType>
}