/** @jsxImportSource @emotion/react */
import { useState } from "react"

export default function Button({text}) {
    const [clicked, setClicked] = useState(false)
    function handleClick(){
        setClicked(true)
        
        setTimeout(() =>{
            setClicked(false)
            console.log(clicked)
        }, 250)
    }
    return (
        <button 
        className={ clicked ? "button clicked" : "button"}
        onClick={handleClick}
        css={{
            backgroundColor: "var(--primary-color)",
            color: "var(--primary-font)",
            border: `${ clicked ? "solid 2px var(--primary-font)" : "solid 2px var(--border)"}`,
            borderRadius: ".5em",
            margin: ".5em .25em"
        }}
        >
            {text}
        </button>
    )
}