/** @jsxImportSource @emotion/react */
export default function WorkspaceTile({ name, text, tags }){

    function renderTags(){
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
    return(
        <div className="WorkspaceTile"
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
            flexDirection: "column"
            
        }}>
            <h3 css={{ 
                padding:"3% 3% 0% 3%",
                fontSize: "1.5em",
                borderRadius: "15px"
            }}>{name}</h3>
            <hr css={{
                width: "75%",
                height: "4px",
                // backgroundColor: "var(--border)",
                backgroundImage: "linear-gradient(to right, var(--border), var(--darkness))",
                borderStyle: "none",
                padding: "0%",
                marginTop: "-2%",
            }}/>
            <p css={{ 
                margin: "3% 3%"
            }}>{text}</p>
            <div css={{
                margin: "auto 3% 3% 3%",
                display: "flex",
                flexWrap: "wrap"
            }}
            >
                {renderTags()}
            </div>
        </div>
    )
}