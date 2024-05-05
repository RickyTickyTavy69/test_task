import {Styles} from "../../styles/styles.ts";

type ButtonProps = {
    children: string;
    onClick?: () => void;
}

const Button = ({children, onClick}: ButtonProps) => {
    return(
        <button onClick={onClick} className={Styles.BUTTON_BORDER_SMALL}>
            {children}
        </button>
    )
}

export default Button;