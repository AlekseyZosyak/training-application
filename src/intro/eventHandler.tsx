import { JSX, MouseEventHandler } from "react";

interface S {
    text: string;
    onClick: MouseEventHandler;
}

export function Button(props: S): JSX.Element {
    const { text, onClick } = props;
    return(
        <button onClick={onClick}>{text}</button>
    )
}

