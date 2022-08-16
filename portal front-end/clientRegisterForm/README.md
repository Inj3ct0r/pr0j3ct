# Front-End Introduction

>Based on the tutorials provided by the teacher *Eduardo Diaz*, where we create a RESTFul API using the **PERN** Stack: Postgresql, Express, React and Node.

## Disclaimer

First, i want to give credits to the corresponding authors that helped me greatly with the making of this project:

- [Anubhav Bansal](https://www.section.io/engineering-education/registration-form-react.js-firebase/) who provided the tutorial for the Registration Form
- [Cairocoders](https://tutorial101.blogspot.com/2021/11/reactjs-dependent-dropdown-country.html) who provided the Dependant Dropdown for countries, states and cities
- [Borislav Hadzhiev](https://bobbyhadz.com/blog/react-input-only-letters) who provided the Regex that allows only alphabet in certain inputs
- [Nikita Gourevitch](https://www.codegrepper.com/code-examples/javascript/check+if+the+email+is+valid+react+) who provided the Regex that allows only email format
- [devserkan](https://stackoverflow.com/questions/51849063/linking-to-other-components-with-react-router) who provided the foundation of the Landing Page
- [Aaron Powell](https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/) who provided the Dynamic Page with conditional routes
- [MUI](https://mui.com/material-ui/react-table/) who provided tutorials to use Data-tables

Many other functions and methods were obtained from https://stackoverflow.com/ and the order of the code in general was motivated by *Ernesto Oropeza* (Cinetica Consulting Contact) and the assignature's teacher.

---------------------------------------------------------------

## Project summary

This project was focused on making a travelling webpage for turists that also allowed articles from associates and different business offering travel packages, promotions and events, a travelling blog so to speak.

As a team we used the **Scrum** methodology in the **Jira** webpage, we also saved our documents and made daily reports of our activities on **Confluence** and our code was uploaded to the **BitBucket** remote repository.

The tasks that I chose to work on were: 

- The **Registration Form** for new users, where all basic data was saved along with the user role depending on the type of register chosen.

- The **Publisher Form** for submitting new events and promotions, it is exclusive to users with the associated role

- The **Reviewer page** where a reviewer will accept or decline any submission made by any publisher, it includes a table with all stored publications, unfortunately this module wasnt finished

Also i included a landing page with the links to each component since the official landing page was never provided to me, so ¯\ _ (ツ)_/¯ 

This concludes the summary, the files contained in "clientRegisterForm" are products of my work, all the details of how they work are included as commentaries or in the links that were provided.
```
To use this code, type "npm install" in the terminal while being in the clientRegisterForm directory to install all dependencies stored in the package.json file, once that is done, type "npm start" to run the React app on the 3001 port of your computer, wait for a moment and you will be redirected to your browser with the app running

You must have the Node server running since a lot of components need the BBDD calls to function, for backend you run it with "node index" in the terminal while being in the "servidor" directory 
```
_*Fernando Mardones -
Ingenieria Civil Informática -
Universidad Adolfo Ibañez -
Programación Profesional -
Primer Semestre 2022*_
