import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState('');
  const apihandler = async () => {  
    const response = await fetch('http://localhost:4000/');
    const data = await response.text();
    console.log(data,"data");
    setData(data);
  }
  return (
    <div className="App">
      <header className="App-header">
       
        <button onClick={apihandler}>Click me</button>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
