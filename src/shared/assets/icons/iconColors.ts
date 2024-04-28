export type IconColors = "fail" | "success";

export const colors = {
    fail : '#E13E4B',
    success : '#40B223',
}

const iconColors = (color: IconColors) => {
    return colors[color];
}

export default iconColors;