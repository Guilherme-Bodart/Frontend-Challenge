import React from 'react';
import logo from './assets/mk-solutions.svg';
import { RegisterPage } from './pages/registerPage/RegisterPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RegisterPage />
    </div>
  );
}

export default App;
