import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Message2 from './components/Message2'
// import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Message2 /> */}
          <Greet name = "Karen" heroname = "Nicki"/>
          {/* <Greet name = "Ruben" heroname = "Robert"/> */}
          {/* <Greet name = "Leo" heroname = "Messi"/> */}
          <Welcome name = "Karen" heroname = "Nicki"/>
          {/* <Welcome name = "Ruben" heroname = "Robert"/> */}
          {/* <Welcome name = "Leo" heroname = "Messi"/> */}
    </div>
  );
}

export default App;
