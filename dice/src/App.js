import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './Die'

function App() {
  return (
    <div className="App">
     <Die face="five"></Die>
     <Die face="six"></Die>
     <Die face="three"></Die>
     <Die face="two"></Die>
    </div>
  );
}

export default App;
