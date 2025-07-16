import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Search from "./pages/Search"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Routes>
  )
}

export default App
