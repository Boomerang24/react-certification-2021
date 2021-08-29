import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/routes/Routes";
import { VideosProvider } from "./components/providers/VideosProvider";
import MainContainer from "./components/Grid/MainContainer";

function App() {
  return (
    <div className="App">
      <VideosProvider>
        <Router>
          <MainContainer>
            <NavBar />
            <Routes />
          </MainContainer>
        </Router>
      </VideosProvider>
    </div>
  );
}

export default App;
