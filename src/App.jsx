/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import WorkspaceTile from './WorkspaceTile'
import Button from './Button'
import WorkspaceTileBox from './WorkspaceTileBox'

function App() {
  const [searchText, setSearchText] = useState("")
  const [workspaces, setWorkspaces] = useState([])

  function createWorkspaces(name, description, tags){
    setWorkspaces((previousWorkspaces)=> [
      ...previousWorkspaces,
      {
        id: crypto.randomUUID(),
        name,
        description,
        tags
      }
    ])
  }

  
  return(
    <>
      <SideBar 
        setWorkspaces={createWorkspaces}>
      </SideBar>

      <SearchBar text={searchText}
       setText={setSearchText}></SearchBar>

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





export default App
