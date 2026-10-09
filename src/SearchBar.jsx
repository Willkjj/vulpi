/** @jsxImportSource @emotion/react */
export default function SearchBar(){

    return(
        <div id="searchBarContainer"
        css={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }}>   
        <input id="searchBar"
            css= {{
                margin: "0 auto",
                width: "33%",
                height: "25px",
                border: "solid 2px var(--border)",
                borderRadius: "0 0 1em 1em",
                color: "var(--primary-font)",
                textAlign: "center"
                
            }}>
            </input>
        </div>
    )
}