/** @jsxImportSource @emotion/react */
import Button from "./Button"

export default function SideBar({setWorkspaces, setScreen, currentScreen, setCurrentWorkspace, newNote}){
    function newWorkspaces(){
        const workspacesID = crypto.randomUUID()
        setWorkspaces(workspacesID, "Untitled", "", [], [])
        setScreen("EDITOR")
        setCurrentWorkspace(workspacesID)
    }

    function handleHomeClicked() {
        setScreen("HOME")
        setCurrentWorkspace("BLANK")
    }
    return(
        <div
        css={{
            left: "-10px",
            top: "20%",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            border: "solid 2px var(--border)",
            borderRadius: "0 1em 1em 0",
            padding: ".25em .5em .25em",
            margin: "2% 0%",
            width: "10%"
        }}>

            <Button 
                children={"Workspaces"}
                whenClicked={handleHomeClicked}
            ></Button>
            {currentScreen == "HOME" ? 
                <Button 
                    children={"New Workspace"}
                    whenClicked={newWorkspaces}
                >
                </Button>
                : <Button
                children={"New Note"}
                whenClicked={newNote}
            >
            </Button>
            }

            <Button children={"Highest Parent"}></Button>
            <Button children={"Import/Export"}></Button>
        </div>
    )
}