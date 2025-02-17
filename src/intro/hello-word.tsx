import { JSX } from "react";

export function HelloWord(): JSX.Element | null{
        return <div>Hello Word</div>;
}

export const HelloWord2 = (): JSX.Element => {
    return <div>Hello Word2</div>;
}