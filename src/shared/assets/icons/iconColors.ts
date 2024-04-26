export enum IconColors{
    fail = '#E13E4B',
    success = '#40B223',
}

const iconColors = (color: IconColors) => {
    return IconColors[color];
}

export default iconColors;