import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/main"
import { Routes, Route } from "react-router-dom"
import welcome from "./Components/Welcome/welcome"
import signup from "./Components/Signup/signup"
import Login from "./Components/Login/login"


function App() {

  return (
    <Routes>
      <Route path="/" Component={welcome}></Route>
      <Route path="/signup" Component={signup}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/home" element={<><Sidebar /><Main /></>}></Route>
    </Routes>

  )
}

export default App
