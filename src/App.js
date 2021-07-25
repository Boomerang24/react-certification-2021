import './App.css';
import { Grid } from './components/Grid/Grid';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome</h1>
      {/* <img src={logomine} className="App-logo" alt="logo" /> */}
      <Grid />
    </div>
  );
}

export default App;
