import { useState } from 'react'
import './App.css'
import dataVideos from './api/videos.json'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import VideosGrid from './components/VideosGrid/VideosGrid.jsx'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 56px);
    position: relative;
`

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarShort, setSidebarShort] = useState(false)

  return (
    <>
      <Header videos={dataVideos.videos} 
              setSidebarShort={setSidebarShort} 
              isSidebarShort={sidebarShort}
              setSidebarOpen={setSidebarOpen}
              isSidebarOpen={sidebarOpen} />
      <MainContainer>
        <Sidebar isSidebarShort={sidebarShort} isSidebarOpen={sidebarOpen} />
        <VideosGrid videos={dataVideos.videos} />
      </MainContainer>
    </>
  )
}

export default App
