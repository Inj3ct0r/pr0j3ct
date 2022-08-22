import React, { Component } from 'react'
import axios from 'axios';
//import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3000/login";
const cookies = new Cookies();

class Login extends Component {

  state={
    form:{
      mail: '',
      contra: ''
    }
  }

  handleChange = async e => {

    await this.setState({
      form:{
          ...this.state.form,
          [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  iniciarSesion = async() => {
    //con md5
    //const response = await axios.post(baseUrl,{mail: this.state.form.mail, contra: md5(this.state.form.contra)})

    //sin md5
    const response = await axios.post(baseUrl,{mail: this.state.form.mail, contra: this.state.form.contra})
    //console.log(response.data.token)
    
    if (response.data.token != null) {
            //var respuesta=response[0];
            //cookies.set('id', respuesta.id, {path: "/"});
            //cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
            //cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
            //cookies.set('nombre', respuesta.nombre, {path: "/"});
            //cookies.set('username', respuesta.username, {path: "/"});
      alert(`Bienvenido `);
      window.location.href="../Crear_articulo";      
    }
    else{alert('El usuario o la contraseña no son correctos')}
  }

  componentDidMount() {if (cookies.get('username')) {window.location.href="./menu"}}

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Email: </label>
              <br />
                <input
                  type="text"
                  className="form-control"
                  name="mail"
                  onChange={this.handleChange}
                />
              <br />
            <label>Contraseña: </label>
              <br />
                <input
                  type="password"
                  className="form-control"
                  name="contra"
                  onChange={this.handleChange}
                />
              <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;