import { JSX } from 'react';
import { HelloWord, HelloWord2 } from './intro/hello-word';
import { Basic } from './intro/jsxBasic.tsx';

export default function App(): JSX.Element | null {

    return (
        <>
            <Basic />
            <HelloWord />
            <HelloWord2 />
        </>
    )
};



