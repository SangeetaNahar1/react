import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const[status,setStatus]=React.useState(true)
  return (
    <div className="App">
     {
      status?<h1>hello world!</h1>:null
     }
    
     <button onClick={()=>setStatus(!status)}>toggle</button>
    </div>
  );
}

export default App;
