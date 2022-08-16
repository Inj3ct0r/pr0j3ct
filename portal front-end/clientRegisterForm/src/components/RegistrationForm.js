/*-RegistrationForm.js-*/

import './../styles/generic.css';
import Header from './registrationFormHeader';
import Body from './registrationFormBody'
import React, { Fragment } from "react";

/* Registration Form that receives props to determine the type of login, be it a regular turist or
   an associate from a related business, they will have different fields to complete as well as
   different roles that will allow them to access to different sections of the webpage
*/

function RegistrationForm(props) {
  return (
    <Fragment>
      <div className="RegistrationForm">
        <Header rol={props.rol}/>
        <Body rol={props.rol}/>
      </div>
    </Fragment>
  );
}

export default RegistrationForm;