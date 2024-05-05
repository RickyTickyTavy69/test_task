import classNames from "../../lib/classNames/classNames.ts";

type FontSize = "L" | "M" | "S";

type TypografyProps = {
    children: string,
    font?: FontSize,
}

const Typografy = ({children, font = "S"} : TypografyProps) => {

    return(
        <p className={classNames("text-black", {
            'text-base' : font === "S",
            'text-lg' : font === "M",
            'text-xl' : font === "L"
        })}>
            {children}
        </p>
    )
}

export default Typografy