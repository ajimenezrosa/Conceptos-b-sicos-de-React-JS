import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

// import HolaMundo, { AdiosMundo } from "./components/HolaMundo";
import Saludar from './components/Saludar';
function App() {
  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
        // setStateCar(!stateCar);
        setStateCar(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar userInfo={user} saludarfn={saludarfn} /> */}

        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender / Apagar </button>

      </header>
    </div>
  );
}

export default App;
