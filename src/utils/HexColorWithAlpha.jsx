import hexRgb from "hex-rgb";

const hexColorWithAlpha = (hex, alpha) => {
    const rgb = hexRgb(hex);
    return 'rgb(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ', ' + alpha + ')';
}

export default hexColorWithAlpha;