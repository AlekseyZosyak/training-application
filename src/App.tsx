import { CSSProperties } from 'react';
import './App.css';

export function App(): JSX.Element | null {
    const h1: CSSProperties = {
        color: 'red'
    }

    return (
        <div>
            <span style={{color: 'green', fontWeight: 'bold'}}>Lorem ipsum dolor sit.</span>
            <div style={h1}>H1</div>
        </div>
    )
};

