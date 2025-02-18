import { JSX } from "react";
const color = ['red', 'green', 'blue', 'black', 'white'];

export function Colorist(): JSX.Element {
    return <div>COLORS : {color.join(' ')}</div>
} 