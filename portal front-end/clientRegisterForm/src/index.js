/*-Index.js-*/

// Landing page model provided from https://stackoverflow.com/questions/51849063/linking-to-other-components-with-react-router

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './styles/generic.css'
import Layout from './Layout'
import RegistrationForm from './components/RegistrationForm'
import Publisher from "./components/Publisher";
import Reviewer from "./components/Reviewer"

// Landing page with the links to the other components
const Landing = () => (
  <div>
    <Layout>
      <h4>Selecciones disponibles: </h4>
      <Link to="/t-form"> Registro viajero</Link>
      <p/>
      <Link to="/a-form"> Registro socios</Link>
      <p/>
      <Link to="/publish"> Publicar evento/promoción</Link> 
      <p/>
      <Link to="/review"> Revisar publicaciones </Link>
    </Layout>
  </div>
)
// Handles error 404 when user searches for non existant route
const NotFound = () => {
  return(
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
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
              <Route path="/t-form" element={<RegistrationForm rol={"Viajero"}/>} />
              <Route path="/a-form" element={<RegistrationForm rol={"Socio"}/>} />
              <Route path="/publish" element={<Publisher/>}/>
              <Route path="/review" element={<Reviewer/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));