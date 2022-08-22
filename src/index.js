import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './index.css';
import logo from './vale_wazxo.jpg';
import RegistrationForm from './components/RegistrationForm' // Ver qué campos necesitamos y cuales cambiamos
import Login from './components/Login' // Es "usable" pero aun me falta aprender redux, lo hizo un compañero de grupo

// For sections hovering others, check absolute positioning https://developer.mozilla.org/en-US/docs/Web/CSS/position 

function Landing() {
  return (
    <div className="App">
      <div className="navbar">
        <nav>
          <a href class="logo">
            <h1>
              <span class="jab">Proyecto</span><span class="tv">Capstone</span>
              <span class="fist">&#x1F44A;</span>
            </h1>
          </a>
          <ul>
            <li class="nav-item">
              <Link to="/registro" class="nav-link" id="nav-link">Registrate</Link>
            </li>
            <li class="nav-item">
              <Link to='/ingreso' class="nav-link" id="nav-link">Inicio de Sesión</Link>
            </li>
            <li class="nav-item">
              <a href="#stakeholders" class="nav-link" id="nav-link">Agenda tu hora</a>
            </li>
            <li class="nav-item">
              <a href="#sub" class="nav-link" id="nav-link">Acerca de nosotros</a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="App-header">
        <img id="img" src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Define browser routes for each component
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/registro" element={<RegistrationForm rol={"Viajero"} />} />
              <Route path="/ingreso" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);