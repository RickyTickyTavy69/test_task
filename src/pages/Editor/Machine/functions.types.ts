export type DataType = "LREAL" | "BOOL" | "str" | "ConstrainedFloatValue";

export type Unit = "mm" | "mm/s" | "mm2" | "seconds [s]" | "";

export interface ParamsOptions {
    Name:        string;
    Description: string;
    Value?:       number | false;
    Unit?:        Unit;
    Default:     number | false | "";
    DataType:    DataType;
}

export interface FunctionParameter {
    Position?:    ParamsOptions;
    Velocity?:     ParamsOptions;
    Acceleration?: ParamsOptions;
    Deceleration?: ParamsOptions;
    Jerk?:         ParamsOptions;
    Distance?:    ParamsOptions;
    InTargetTolerance?: ParamsOptions;
    SafeHeight?: ParamsOptions;
    Position_X?: ParamsOptions;
    Position_Y?: ParamsOptions;
    Position_Z?: ParamsOptions;
    DontRetractTool?: ParamsOptions;
    Z_Approach?: ParamsOptions;
    VelocityZ?: ParamsOptions;
    camera_name?: ParamsOptions;
    path?: ParamsOptions;
    filename?: ParamsOptions;
    exposure_time?: ParamsOptions;
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