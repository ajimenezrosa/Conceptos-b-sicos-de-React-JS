import logo from './logo.svg';
import './App.css';

// import HolaMundo, { AdiosMundo } from "./components/HolaMundo";
import Saludar from './components/Saludar';
function App() {
  
  const user = {
    nombre: "Alejandro Jimenez**",
    edad: 26,
    color: "Azul"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} />

      </header>
    </div>
  );
}

export default App;
