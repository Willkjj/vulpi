/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import WorkspaceTile from './WorkspaceTile'
import Button from './Button'
import WorkspaceTileBox from './WorkspaceTileBox'



function App() {
  // const socket = io()

  const [searchText, setSearchText] = useState("")
  const [workspaces, setWorkspaces] = useState([])

  // socket.on('connect', (serverWorkspaces) =>{
  //   setWorkspaces(serverWorkspaces)
  // })
  
  const [screen, setScreen] = useState("HOME")
  const [currentWorkspace, setCurrentWorkspace] = useState("BLANK")


  function createWorkspaces(id, name, description, tags, notes){
    setWorkspaces((previousWorkspaces)=> [
      ...previousWorkspaces,
      {
        id,
        name,
        description,
        tags,
        notes
      }
    ])
    localStorage.setItem("user", JSON.stringify(workspaces))
  }

  function createCommonBars() {
    return(
      <>
        <SideBar 
          setWorkspaces={createWorkspaces}
          setScreen={setScreen}
          currentScreen={screen}
          setCurrentWorkspace={setCurrentWorkspace}
        >
        </SideBar>
        <SearchBar text={searchText}
        setText={setSearchText}></SearchBar>
      </>
    )
  }

  switch (screen) {
    case "EDITOR":

      return(
        <>
          {createCommonBars()}
        </>
      )
  
    default:
      return(
        <>
          {createCommonBars()}
        
          <WorkspaceTileBox>
            {workspaces.map((workspace)=>(
              <WorkspaceTile
                key={workspace.id}
                name={workspace.name}
                description={workspace.description}
                tags={workspace.tags}
                
              >
              </WorkspaceTile>
            ))}
          </WorkspaceTileBox>
        </>
      )
  }

}





export default App
