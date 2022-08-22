/*-registrationFormHeader.jsx-*/

import React from 'react';

// Header that takes the type of register to change the label thats shown

function Header(props) {
    return(
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Formulario de registro - {props.rol}</h3>
            </div>
        </nav>
    )
}
export default Header;