/** @jsxImportSource @emotion/react */
import { useState } from "react"

export default function Button({ children, whenClicked }) {
    const [clicked, setClicked] = useState(false)

    function handleClick(){
        whenClicked?.()

        setClicked(true)
        setTimeout(() =>{
            setClicked(false)
        }, 250)
    }
    
    return (
        <button 
        className={ clicked ? "button clicked" : "button"}
        onClick={handleClick}

        css={{
            backgroundColor: "var(--border)",
            color: "var(--primary-font)",
            fontSize: "1em",
            fontWeight: "bold",
            border: "solid 2px var(--border)",
            borderRadius: ".5em",
            margin: ".5em .25em",
            height: "45px",
            transition: ".1s",

            "&:hover":{
                border: "solid 2px var(--primary-font)",
            },


            "&:active":{
                backgroundColor: "var(--primary-font)",
                color: "var(--border)"
            }
        }}
        >
            {children}
        </button>
    )
}