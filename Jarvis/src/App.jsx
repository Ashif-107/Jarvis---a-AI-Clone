import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/main"
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<><Sidebar />,<Main /></>}></Route>
    </Routes>

  )
}

export default App
