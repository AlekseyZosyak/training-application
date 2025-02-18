import { JSX } from 'react';
import { HelloWord, HelloWord2 } from './intro/hello-word';
import { Basic } from './intro/jsxBasic.tsx';
import { Colorist } from './intro/renderArray.tsx';
import { Button } from './intro/eventHandler.tsx';

const color = ['red', 'green', 'blue', 'black', 'white'];
const box = [20, 80, 54, 99];



export default function App(): JSX.Element | null {

    return (
        <>
            <Basic />
            <HelloWord />
            <HelloWord2 />
            <Colorist rend={color} order={true}/>
            <Colorist rend={box} order={false}/>
            <Button text={'hello'} onClick={() => {
                console.log('reali')
            }}/>
        </>
    )
};



