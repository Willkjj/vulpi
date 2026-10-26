/** @jsxImportSource @emotion/react */
import { IconDotsVertical } from '@tabler/icons-react';

export default function WorkspaceTile({workspace, setCurrentWorkspace, setScreen }){
    const tags = workspace.tags
    function handleWorkspaceClick(){
        setCurrentWorkspace(workspace)
        setScreen("EDITOR")
    }

    function handleOptionsClick(e){
        e.stopPropagation()
    }



    function renderTags(tags){
        let html = []
        if (!tags) { return }
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

    return(
        <div className="WorkspaceTile"
        onClick={handleWorkspaceClick}
        css={{
            height:"250px",
            width:"200px",
            backgroundColor:"var(--darkness)",
            border: "3px solid var(--border)",
            borderRadius: "15px",
            color:"var(--primary-font)",
            margin: "2%",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            transition: ".2s",
            cursor: "pointer",

            "&:hover": {
                borderColor: "var(--primary-font)",
                "hr": {
                    backgroundImage: "linear-gradient(to right, var(--primary-font), var(--darkness))",
                }
            }
            
        }}>

            <h3 css={{ 
                padding:"3% 3% 0% 3%",
                fontSize: "1.5em",
                borderRadius: "15px",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }}>{workspace.name}</h3>
            <hr css={{
                width: "75%",
                height: "4px",
                // backgroundColor: "var(--border)",
                backgroundImage: "linear-gradient(to right, var(--border), var(--darkness))",
                borderStyle: "none",
                padding: "0%",
                marginTop: "-2%",
                transition: ".2s"
            }}/>

            <p css={{ 
                margin: "3% 3%",
                overflow:"hidden",
                textOverflow: "ellipsis",
                maxHeight: "10em"
            }}>{workspace.description}</p>

            <div css={{
                margin: "auto 3% 2% 3%",
                display: "flex",
                flexWrap: "wrap"
            }}
            >
                {renderTags(tags)}
                <button css={{
                    marginLeft: "auto",
                    border: "none", 
                    color: "var(--primary-font)",

                    "svg": {
                        padding: "3px 1px 2px 1px",
                    },  
                
                    "svg:hover": {

                        backgroundColor: "var(--primary-color)",
                        borderRadius: "10px",
                    }
                    }}
                
                    onClick={handleOptionsClick}
                >
                    <IconDotsVertical>

                    </IconDotsVertical>
                </button>

            </div>
        </div>
    )
}