import React from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Message2 from './components/Message2'
// import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Message2 /> */}
          {/* <Greet name = "Karen" heroname = "Nicki"/> */}
          {/* <Greet name = "Ruben" heroname = "Robert"/> */}
          {/* <Greet name = "Leo" heroname = "Messi"/> */}
          {/* <Welcome name = "Karen" heroname = "Nicki"/> */}
          {/* <Welcome name = "Ruben" heroname = "Robert"/> */}
          {/* <Welcome name = "Leo" heroname = "Messi"/> */}
    </div>
  );
}

export default App;
