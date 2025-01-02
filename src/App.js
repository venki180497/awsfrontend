import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState('');
  const apihandler = async () => {  
    const response = await fetch('http://13.202.155.38:4000/signup', 
     { method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ "email":"venki180497@gmail.com", "password":"123456" })
  } 
  );
    const data = await response.json();
    console.log(data,"data");
    setData(data.message);
  }
  return (
    <div className="App">
      <header className="App-header">
       
        <button onClick={apihandler}>press me</button>
        <p>hello world</p>
      </header>
    </div>
  );
}

export default App;
