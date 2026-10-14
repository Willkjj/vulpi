/** @jsxImportSource @emotion/react */
export default function WorkspaceTileBox({ children }){
    return (
        <div id='WorkspaceTileBox' 
            css={{
                // border: "solid 2px red",
                maxWidth: "100%",
                height: "fit-content",
                padding: "0 10%",
                marginTop:"2em",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center"
                
            }}>
            {children}
        </div>
    )
}