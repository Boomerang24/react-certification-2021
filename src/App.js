import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from 'react';
import { VideosProvider } from './components/providers/VideosProvider'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/routes/Routes';
// import { useFetchVideos } from './components/hooks/useFetchVideos';
// import { data } from './mock/mockedUTube'
// let videos = [...data];

function App() {
  // const videos = useFetchVideos(encodeURI('Ramito de Violetas'));
  return (
    <div className="App">
      <VideosProvider>
        <Router>
          <NavBar />
          <h1>Welcome</h1>
          <Routes />
        </Router>   
      </VideosProvider>
    </div>
  );
}

export default App;
