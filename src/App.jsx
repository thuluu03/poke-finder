import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search/Search";
import DetailView from "./pages/DetailView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />} />
      <Route path="/search/pokemon-details/:id" element={<DetailView />} />
    </Routes>
  );
}

export default App;
