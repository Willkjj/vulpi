/** @jsxImportSource @emotion/react */

export default function EditorModal({ workspace, changeWorkspace, display, setModalDisplay }) {
// TODO: Add a background fuzz outside of the modal, which closes the modal if you click on it 
    function handleModalClose() {
        setModalDisplay(false)
    }

    function renderTags(tags){
        let html = []
        tags.forEach(tag => {
            html.push(<p css={{
                display: "inline",
                border: "solid 2px var(--primary-font)",
                borderRadius: "10px",
                margin: "2%",
                padding: "1% 2%"
            }}>{tag}</p>)
        });

        return html
    }
    
    function handleOptionsChange(e){
        const property = e.target.name
        const value = e.target.value

        changeWorkspace(workspace.id, property, value)
    }

    if (display) {
        return (
            <>
            
                <div
                    onClick={handleModalClose}  
                    css={{
                        //background fuzz
                        position: "fixed",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "rgba(0, 0, 0, 0.64)",

                    }}  
                >
                </div>
                <div css={{
                    position: "fixed",
                    top:"10%",
                    left: "10%",
                    height: "80%",
                    width: "80%",
                    backgroundColor: "var(--darkness)",
                    border: "2px solid var(--border)",
                    borderRadius: "2em",
                    color: "var(--primary-font)",
                    overflow: "hidden",
                    boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: "1em 2em",

                    "#name-div": {
                        width: "50%",
                        "input": {
                            width: "100%"
                        }
                    },

                    "#description-div": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        margin: "2% 0",
                        gap: "10px",
                        height: "50%",

                        "textarea": {
                            height: "100%",

                        }
                    },

                    "#tags-div": {
                        minHeight: "50px",
                        marginTop: "10px"
                    },

                    "label, h3": {
                        fontSize: "25px",
                        fontWeight: "normal"
                    },

                    "input, textarea, #tags-div": {
                        fontSize: "18px",
                        color: "var(--primary-font)",
                        border: "2px solid var(--border)",
                        borderRadius: "10px",
                        padding: "5px 8px",
                        marginLeft: "8px",
                        overflow:"auto",
                        
                    },

                    "button": {
                        color: "var(--primary-font)",
                        backgroundColor: "var(--border)",
                        border: "2px solid var(--border)",
                        borderRadius: "10px",
                        padding: ".5% 1%",
                        fontSize: "20px",
                        transition: ".1s",
                        height: "50px"
                    },

                    "button:hover": {
                        border: "2px solid var(--primary-font)",

                    }

                }}>
                    <div
                    css={{
                        display: "flex",
                        justifyContent:"space-between"
                    }}>
                        <div id="name-div">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" value={workspace.name}
                            onChange={handleOptionsChange}/>
                        </div>
                        <button
                            onClick={handleModalClose}
                        >Close</button>
                    </div>
                    <div id="description-div">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="descsription" value={workspace.description}
                        onChange={handleOptionsChange}></textarea>
                        {/* <input type="text" name="description" id="description" value={workspace.description} */}
                        {/* // onChange={handleOptionsChange}/> */}
                    </div>
                    <div>
                        <h3>Tags: </h3>
                        <div id="tags-div">
                            {renderTags(workspace.tags)}
                        </div>
                    </div>
                </div>

            </>
        )
    } else {
        return <></>
    }
}