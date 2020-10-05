import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
          <Greet name = "Karen" heroname = "Nicki"/>
          <Greet name = "Ruben" heroname = "Robert"/>
          <Greet name = "Leo" heroname = "Messi"/>
          <Welcome name = "Karen" heroname = "Nicki"/>
          <Welcome name = "Ruben" heroname = "Robert"/>
          <Welcome name = "Leo" heroname = "Messi"/>
    </div>
  );
}

export default App;
