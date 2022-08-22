/*-registrationFormBody.jsx-*/

// Provided from https://www.section.io/engineering-education/registration-form-react.js-firebase/

import React, {useState, useEffect} from 'react';
import Dropdown from './registrationFormDropdown';
import './../index.css';

const Body = (props) => {
    // POST Users
    const serverApiUrl = 'http://localhost:3001/users/post'

    // Set our variables with their corresponding useState Hook
    const [name, setFirstName] = useState(null);
    const [nickname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [country, setCountry] = useState(null);
    const [state, setStates] = useState(null)
    const [city, setCity] = useState(null);
    const [profile, setProfile] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    // Set profile hooks to the value retrieved from parent props
    useEffect(()=>{
        setProfile(props.rol)
    }, [])

    // Regex to validate input data, eslint-disable-next-line was added to avoid warnings coming form the regex
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputRegex = /[^a-z]/gi

    // Callback functions, take the values from the child component and use the hooks to store them in parent component
    // There is an anomaly where values sent from this.state are not updated, rather they change in the next render
    const childToParent1 = (e) => {
        setCountry(e)
        console.log(e)
    }
    const childToParent2 = (e) => {
        setStates(e)
        console.log(e)
    }
    const childToParent3 = (e) => {
        setCity(e)
        console.log(e)
    }

    // When input is submitted, store it into our variables
    const handleInputChange = (e) => {

        var {id , value} = e.target; // Checks the id where the event came from and the value it stores

        if(id === "name"){
            value = value.replace(inputRegex, ''); // Compares the value with the assigned regex for input and returns vaild format
            setFirstName(value);
        }
        if(id === "nickname"){
            value = value.replace(inputRegex, '');
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

        console.log("Se ha ingresado "+value) // Print the input. Delete on final release !!!
    }

    // Send data to BBDD
    const handleSubmit = async e => {
        // Check if passwords and email are correctly inputted
        if(confirmPassword===password && emailRegex.test(email)){
            // Prevents page from refreshing on submit
            e.preventDefault()
            console.log(name, nickname, email, country, city, state, profile, password)
            try {
                // Simulate a curl post, sending our data in a body with headers and transforming it into JSON format
                const body = {name,nickname,email,country,state,city,profile,password}
                const response = await fetch(serverApiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
                // Check response, useful for error handling
                console.log(response)
                // Redirect user to the current page after submit
                window.location = "/"

                return response.json()
            } 
            catch (err) {console.error(err.message)}
        }
        else {alert("Contraseñas tienen valor = "+(confirmPassword===password)+" / email es tiene valor = "+(emailRegex.test(email)))}
    }

    // JSX of a list of inputs and selects, data is submitted to BBDD when 'Register' button is pressed
    // Doing the dynamic form in this way is VERY unprofessional, investigate how to make it more dynamic
    if(profile==="Viajero"){
        return(
            <div className="form">
                <div className="form-body">
                    <div className="name">
                        <label className="form__label" for="name">Nombre </label>
                        <input className="form__input" type="text" id="name" value={name} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                    </div>
                    <div className="nickname">
                        <label className="form__label" for="nickname">Apellido </label>
                        <input className="form__input" type="text" id="nickname" value={nickname} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input className="form__input" type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                    </div>
                        <Dropdown
                            /* Task: combine these three functions into a single one that handles different values */
                            parentCallback1={(e) => childToParent1(e)} 
                            parentCallback2={(e) => childToParent2(e)} 
                            parentCallback3={(e) => childToParent3(e)}/>
                    <div classname="profile">
                        <label className="form__label" for="profile">Perfil </label>
                        <input disabled className="form-input" type="text" id="profile" value={profile} onChange={(e) => handleInputChange(e)} placeholder={profile}/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Contraseña </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirme contraseña </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)}/>
                    </div>

                </div>
                <div class="footer">
                    <button onClick={(e)=>handleSubmit(e)} type="submit" class="btn">Registrarse</button>
                </div>
            </div>
        )   
    }
    if(profile==="Socio"){
        return(
                <div className="form">
                    <div className="form-body">
                        <div className="name">
                            <label className="form__label" for="name">Nombre </label>
                            <input className="form__input" type="text" id="name" value={name} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                        </div>
                        <div className="nickname">
                            <label className="form__label" for="nickname">Apellido </label>
                            <input className="form__input" type="text" id="nickname" value={nickname} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                        </div>
                        <div className="email">
                            <label className="form__label" for="email">Email </label>
                            <input className="form__input" type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} autocomplete="off"/>
                        </div>
                            <Dropdown
                                /* Task: combine these three functions into a single one that handles different values */
                                parentCallback1={(e) => childToParent1(e)} 
                                parentCallback2={(e) => childToParent2(e)} 
                                parentCallback3={(e) => childToParent3(e)}/>
                        <div classname="profile">
                            <label className="form__label" for="profile">Perfil </label>
                            <input disabled className="form-input" type="text" id="profile" value={profile} onChange={(e) => handleInputChange(e)} placeholder={profile}/>
                        </div>
                        <div>
                            <label className="form__label" for="company">Compañia </label>
                            <input className="form-input" type="text" id="company" onChange={(e) => handleInputChange(e)}/>
                        </div>
                        <div className="password">
                            <label className="form__label" for="password">Contraseña </label>
                            <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)}/>
                        </div>
                        <div className="confirm-password">
                            <label className="form__label" for="confirmPassword">Confirme contraseña </label>
                            <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)}/>
                        </div>

                    </div>
                    <div class="footer">
                        <button onClick={(e)=>handleSubmit(e)} type="submit" class="btn">Registrarse</button>
                    </div>
                </div>
        )
    }
}

export default Body