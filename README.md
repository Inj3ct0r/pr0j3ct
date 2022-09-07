### <center>Proyecto Capstone Grupo 7</center>

He desechado los archivos anteriores con tal de comenzar a trabajar con el proyecto definitivo, este proyecto utiliza el stack PERN e incorpora los elementos de Redux y JWT.

Todos los archivos provienen del tutorial proporcionado por **bezkoder**, tanto el [cliente](https://www.bezkoder.com/react-hooks-redux-login-registration-example/) como el [servidor](https://www.bezkoder.com/node-js-jwt-authentication-postgresql/), el trabajo estará en comprender la lógica del código y adaptarlo a nuestras necesidades, ya que no hay tiempo para construir una aplicación por nosotros mismos.

Primero descargamos los archivos presionando el botón verde _**Code**_ que está arriba de los archivos en GitHub y seleccionan descargar como zip, luego descomprimirlos dentro de una carpeta (ej. ```c4pst0n3```)

Para correr el **client** se hace lo siguiente: 
- En la terminal cmd de VScode u otra terminal, usar el comando cd (Change Directory) con la dirección de la carpeta que contiene los archivos (ej. ```cd c4pst0n3``` o ```cd Documentos\Archivos\capstone``` dependiendo de la ruta)
- Ejecutar el comando ```npm install```
   - _Este comando instala todos los modulos de node y las dependencias guardadas en el **package.json** para usar las librerias que necesitamos_
- Finalmente ejecutar en la terminal ```npm start```
   - _Este comando buscará el archivo **index.js** el cual renderiza el JSX en el DOM, por lo que no deben moverlo de lugar_

Para correr el **server** se hace algo similar:
- En la terminal cmd de VScode u otra terminal, usar el comando cd (Change Directory) con la dirección de la carpeta que contiene el server (ej. ```cd server``` o ```cd Documentos\Archivos\c4pst0n3\server``` dependiendo de la ruta)
- Ejecutar el comando ```npm install```
   - _Este comando instala todos los modulos de node y las dependencias guardadas en el **package.json** para usar las librerias que necesitamos_
- Finalmente ejecutar en la terminal ```node server```
   - _Este comando buscará el archivo **server.js** el cual contiene todas las instrucciones_

Hecho esto se ejecutará el comando por unos momentos y se abrirá una nueva página en el navegador con nuestro trabajo, en el caso del servidor solo avisará por terminal que está corriendo, dado que se maneja de forma remota.

React es muy sensible a los errores y advertencias, tanto asi que el programa no se muestra hasta que se hayan resuelto, algunas advertencias pueden ignorarse y no pasa nada, para otras es necesario dirigirse a la dirección donde se detectó el error y solucionarla.