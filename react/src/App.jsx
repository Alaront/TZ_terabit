import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router";
import Main from "./pages/Main/Main.jsx";
import User from "./pages/User/User.jsx";

function App() {

  return (
    <div className={"App"}>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/:id"} element={<User />} />
      </Routes>
    </div>
  )
}

export default App
