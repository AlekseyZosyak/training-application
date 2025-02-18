import { JSX } from "react";


interface ColorList {
    rend: string[] | number[];
    order: boolean;
}


export function Colorist(props: ColorList): JSX.Element {
    const { rend, order = false } = props;
    const ListComponent = order ? 'ol' : 'ul';

    return (
        <ListComponent>
            {rend.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ListComponent>
    )
} 