import React from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Message2 from './components/Message2'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './styles/appStyles.css'
import styles from './styles/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <Inline />
      {/* <Stylesheet primary = {true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
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
