import { CSSProperties, JSX } from "react"

export function Basic(): JSX.Element | null {
    const listStyle: CSSProperties = {
        color: 'red', 
        backgroundColor: 'yellow'
    }
    return (
        < div >
            <span style={{ color: 'green', fontWeight: 'bold', fontSize: 23 }}>Lorem ipsum dolor sit.</span>
            <div style={listStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae.</div>
        
            </div>
            )

}