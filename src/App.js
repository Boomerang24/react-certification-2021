import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import React from "react";
import { VideosProvider } from "./components/providers/VideosProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/routes/Routes";

function App() {
  return (
    <div className="App">
      <VideosProvider>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </VideosProvider>
    </div>
  );
}

export default App;
