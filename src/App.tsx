import { CSSProperties } from 'react';
import './App.css';


export const App = (): JSX.Element => {
    return <div>hello World</div>;
};




export function Element(): JSX.Element | null {
    const h1: CSSProperties = {
        color: 'red'
    }

    return <div style={h1}>H1</div>;
};

