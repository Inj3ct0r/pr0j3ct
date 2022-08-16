# FrontEnd Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2022-07-04
### Added
- Final adjustments to Reviewer table
- Commentaries on code functionality and such

## [1.4.1] - 2022-06-29
### Added
- New field components in PublisherFormData.jsx to match new BBDD table values
- PublisherForm.jsx now clears field input when selected option changes
### Changed
- Post and get url for all components acording to server changes
  - Variables names were changed as well to match new BBDD table values
- PublisherForm.jsx now has universal hooks for both events and promotions that are handled accordingly

## [1.4.0] - 2022-06-28
### Added
- Table showing desired columns names and sample row data
- Dropdown to choose between Event table and Promotion table

## [1.3.1] - 2022-06-27
### Added
- Reviewer.js file and components to start working on it
### Changed
- Components names and locations to components folder for easier reading
  - App.js or similar files will have .js type file type
  - Parent and Child components will have the .jsx file type
### Removed
- styles.css file as we already have an universal .css file

## [1.3.0] - 2022-06-26
### Added
- Preference fields for event and promotions

## [1.2.0] - 2022-06-20
### Added
- Post url for event and promotion publish
### Changed
- Hooks are now located on corresponding OnChange function

## [1.1.0] - 2022-06-19
### Added
- Hooks in the event/promotion form to send data to BBDD
- Curl operation to post into BBDD for Events and Promos
### Changed
- Landing page link for event/promotion publish
- Labels in the event/promotion publish page

## [1.0.2] - 2022-06-14
### Added
- Commentaries and minor tweaks to event/promotion submit code
### Changed
- EventForm.js to display a single page
- Event/promotion submit page now shows relevant inputs as placeholders

## [1.0.1] - 2022-06-14
### Added
- Commentaries for various files
### Changed
- Common .css file is now "generic.css"
### Removed
- EventForm.js, eventForm.css and all calls in index.js related to it
- Form.css and index.css 

## [1.0.0] - 2022-06-13
### Added
- Login made by Ignacio in a separate folder
- Settled with Dynamic page obtained in the web, located in "testing" subfolder

## [0.5.0] - 2022-06-09
### Added
- Dynamic title for each registration form to differentiate them more easily
- EventForm.js and eventForm.js component to start working on it
- New folder to store .css files
- Layout.js to change Header and Footer depending on the page
- NotFound component to handle error 404 
- Commentary in .gitignore file to remove public/ in future team code integration
### Changed
- Main folder is now called clientRegisterForm
- Header component in index.js only executes in landing page
- Form.js changed to RegistrationForm.js to avoid confusions
- Many variable names to make reading easier
### Removed
- Upper folder "Formulario registro" to make change of directories easier
- Header component from index.js
  
## [0.4.0] - 2022-06-08
### Added
- Value passing between components to know the user role
- Pseudo-dynamic form that changes depending on registration selected
- Company input for associates

## [0.3.0] - 2022-06-07
### Added
- Landing page for register selection
  - Added BrowserRouter, Route, Routes and Link modules to index.js to work with page navegation
### Changed
- Index.js now shows a basic landing page to select the register form for travellers and associates
- App.js is now Form.js
- index.css to be more stylish

## [0.2.1] - 2022-06-01
### Added
- Commentary regarding the use of default value for roles
### Changed
- Endpoints to match changes in backend
### Removed
- Placeholder for role option

## [0.2.0] - 2022-06-01
### Added
- Dropdown for user role
- Regex for email validation
- Ignore-warning statement for Regex
- Tags in JSX to avoid showing input history
### Changed
- Fixed a problem where callback function returned an un-updated value, this was solved by returning _**event.target.value**_ in callback from children to parent instead of _**this.state.value**_
- Fixed the Regex bypass in the input slots by changing the method to validate, instead of an _**if**_ statement we use the _**.replace**_ function in the value
- Updated README file
- Changed the language localization to English-only for the source code, front-end will be localizated to Spanish
### Removed
- Button to print values for testing
- Spaces between some values in JSX
- Placeholder text in the user inputs

## [0.1.1] - 2022-05-26
### Added
- Comentaries explaining functionalities of the code
### Changed
- Some functions related to _**this.state**_ to avoid too many re-renders
### Removed
- Some Hard Code

## [0.1.0] - 2022-05-26
### Added
- Dropdown for countries, cities and states
    - Located in Child Class Component that is later exported to the Functional Parent component of the form
    - Currently has issues with passing the value from child component to parent component

## [0.0.0] - 2022-05-07
### Added
- First version of Registration Form
- Input for name, nickname, country, city, profile, password and confirm password