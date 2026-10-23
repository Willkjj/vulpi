/** @jsxImportSource @emotion/react */
export default function SearchBar( {text, setText}){


    return(
        <div id="searchBarContainer"
        css={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "-0px",
            
        }}>   
        <input id="searchBar"
            css= {{
                margin: "0 auto",
                width: "33%",
                height: "35px",
                border: "solid 2px var(--border)",
                borderTop:"none",
                borderRadius: "0 0 1em 1em",
                color: "var(--primary-font)",
                textAlign: "center",
                fontSize: "1em"
                
            }}
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
            >

            </input>
        </div>
    )
}