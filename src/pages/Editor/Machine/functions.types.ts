export enum DataType {
    Lreal = "LREAL",
}

export enum Unit {
    Mm = "mm",
    MmS = "mm/s",
}

export interface ParamsOptions {
    Name:        string;
    Description: string;
    Value:       number;
    Unit:        Unit;
    Default:     number;
    DataType:    DataType;
}

export interface FunctionParameter {
    Position?:    ParamsOptions;
    Velocity:     ParamsOptions;
    Acceleration: ParamsOptions;
    Deceleration: ParamsOptions;
    Jerk:         ParamsOptions;
    Distance?:    ParamsOptions;
}

export interface FunctionDescription {
    Name:         string;
    Description:  string;
    FunctionType: string;
    Category:     string;
}


export interface FunctionOption {
    functionDescription: FunctionDescription;
}

export interface FunctionOptionWithParams {
    functionDescription: FunctionDescription;
    functionParameter:   FunctionParameter;
}