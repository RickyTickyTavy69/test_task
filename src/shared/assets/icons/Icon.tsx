type IconNames = "check" | "fail";
import {IconColors} from "./iconColors.ts";
import iconColors from "./iconColors.ts";

import SVG from 'react-inlinesvg';

type IconProps = {
    name: IconNames;
    color?: IconColors;
}

const Icon = ({name, color}: IconProps) => {
    const url = new URL(`./${name}.svg`, import.meta.url).href;
    return <SVG height={35} width={35} src={url} color={color ? iconColors(color): '#000'} />;
}

export default Icon;