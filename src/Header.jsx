/** @jsxImportSource @emotion/react */
import Button from "./Button"

export default function Header(){
    return(
        <header
        css={{
            left: "-10px",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            border: "solid 2px var(--border)",
            borderRadius: "0 1em 1em 0",
            padding: ".25em .5em .25em",
            margin: "2% 0%",
            width: "10%"
        }}>

            <Button text={"Workspaces"}></Button>
            <Button text={"New Workspace"}></Button>
            <Button text={"Highest Parent"}></Button>
            <Button text={"Import/Export"}></Button>
        </header>
    )
}