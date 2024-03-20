import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/main"
import { Routes, Route } from "react-router-dom"
import welcome from "./Components/Welcome/welcome"

function App() {

  return (
    <Routes>
      <Route path="/" Component={welcome}></Route>
      <Route path="/home" element={<><Sidebar /><Main /></>}></Route>
    </Routes>

  )
}

export default App
