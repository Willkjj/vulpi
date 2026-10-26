/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import WorkspaceTile from './WorkspaceTile'
import Button from './Button'
import WorkspaceTileBox from './WorkspaceTileBox'
import EditWorkspace from './EditWorkspace'
import EditorModal from './EditorModal'



function App() {
  // const socket = io()

  const [searchText, setSearchText] = useState("")
  const local = JSON.parse(localStorage.getItem("workspaces"))
  const [workspaces, setWorkspaces] = useState( local ? local : [])
  
  const [screen, setScreen] = useState("HOME")
  const [currentWorkspace, setCurrentWorkspace] = useState("BLANK")

  const [displayEditorModal, setEditorModalDisplay] = useState(false)


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
  }

  function updateWorkspaces(workspacesID, property, value) {
    setWorkspaces((previousWorkspaces) => 
      previousWorkspaces.map((workspace) => 
        workspace.id === workspacesID
          ? {
              ...workspace,
              [property]: value,
            }
          : workspace
      )
    )

    setCurrentWorkspace((previousWorkspace) => 
      previousWorkspace?.id === workspacesID
        ? {
            ...previousWorkspace,
            [property]: value,
          }
        : previousWorkspace
    )

  }

  useEffect(() => {
    localStorage.setItem(
      "workspaces",
      JSON.stringify(workspaces)
    )
  }, [workspaces])

  function createCommonBars() {
    return(
      <>
        <SideBar 
          setWorkspaces={createWorkspaces}
          setScreen={setScreen}
          currentScreen={screen}
          currentWorkspace={currentWorkspace}
          setCurrentWorkspace={setCurrentWorkspace}
        >
        </SideBar>
        <SearchBar text={searchText}
          setText={setSearchText}
          screen={screen}
          workspace={currentWorkspace}
        ></SearchBar>
      </>
    )
  }

  switch (screen) {
    case "EDITOR":
      return(
        <>
          <EditWorkspace
            workspace={currentWorkspace}
            setEditorModalDisplay={setEditorModalDisplay}
          >

          </EditWorkspace>
          {createCommonBars()}

          <EditorModal
            workspace={currentWorkspace}
            changeWorkspace={updateWorkspaces}
            display={displayEditorModal}
            setModalDisplay={setEditorModalDisplay}
            
          >

          </EditorModal>
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
                workspace={workspace}
                setCurrentWorkspace={setCurrentWorkspace}
                setScreen={setScreen}
                
              >
              </WorkspaceTile>
            ))}
          </WorkspaceTileBox>
        </>
      )
  }

}





export default App
