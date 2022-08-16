/*-Layout.js-*/

import './styles/generic.css';
import React from "react";

// Component created to have header and footer in one place, also allows to change them depending of purpose
function Layout(props) {

  const Header = () => (
      <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Bienvenido al portal del turista</h3>
          </div>
        </nav>
  )
  const Footer = () => <div>Powered by React</div>;

  return(
      <div>
        <Header />
          <div className="content">
            {props.children}
          </div>
        <Footer />
      </div>
  );
}

export default Layout