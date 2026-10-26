/** @jsxImportSource @emotion/react */

export default function EditWorkspace({ workspace, setEditorModalDisplay }) {
    function handleClick() {
       setEditorModalDisplay(true)
    }

    return (
        <>
            <aside
            css={{
                display: "flex",
                position: "fixed",
                top: "10%",
                left: "0px",
                border: "2px solid var(--border)",
                borderLeft: "none",
                borderRadius: "0 1em 1em 0",
                color: "var(--primary-font)",
                padding: ".25em .5em .25em",
                margin: "2% 0%",
                width: "10%",
                
                "&:hover": {
                    border: "2px solid var(--primary-font)",
                    borderLeft: "none",
                },

                "h1": {
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "30px",
                    margin: "2%",
                }

            }}
            onClick={handleClick}
            >
                <h1>{workspace["name"]}</h1>
            </aside>
        </>
    )
}