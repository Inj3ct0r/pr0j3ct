# BackEnd Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2022-07-04
### Added
- Final adjustments on the README file

## [1.4.0] - 2022-06-29
### Added
- Created_date and Modified_date to event and promotion tables
### Changed
- All variables names, file names, folder names endpoints and BBDD table names were changed to English
- Values for events and promotions no longer have their suffix ('eventName' is now 'name' and so on)
- Table values for events and promotions are now mostly the same (except for Sponsor - Target)
### Fixed
- Client side had an error where POST didnt work because uppercase values were not admitted
  - This was resolved by writing all BBDD table values with lowercase only

## [1.3.0] - 2022-06-26
### Added
- Preference parameters for event and promotions post and dao

## [1.2.0] - 2022-06-20
### Updated
- Event endpoint and Dao to be operative
### Changed
- Status variable received by event and promotion to be the same

## [1.1.0] - 2022-06-19
### Added
- Endpoint and Dao files for Promotions
- Post operation for Promotions
- Promotions and Events in the list of constant tables

## [1.0.1] - 2022-06-14
### Added
- Commentaries for various files
### Changed
- Order of code provided by Ignacio and my own

## [1.0.0] - 2022-06-13
### Added
- Server side of Ignacio
  - Added endpoint for login 
  - Added JWT for login

## [0.3.0] - 2022-06-04
### Added
- General GET ALL with pseudo-dynamic table 
- "dao" (Data Access Object) to manage querys in a single place
  - "constants" folder stores the names of our tables
  - Each role has its own dao folder
- Folders in endpoints with CRUD operations for each role 
### Changed
- Each BBDD query is managed in dao folder
- Updated existing endpoints
### Removed
- .js files containing multiple querys from multiple tables
  
## [0.2.0] - 2022-06-01
### Added
- "State" column in user BBDD
### Changed
- Endpoints are now imported from the folder "endpoints"
- Various res.json() to match the desired output 
### Removed
- Some Hard Code
- Unused variables

## [0.1.1] - 2022-05-30
### Added
- Endpoints to get data from different tables
### Changed
- Variabels names across all endpoints to match their data

## [0.1.0] - 2022-05-26
### Added
- Comentaries explaining functionalities of the code
  
## [0.0.1] - 2022-05-08
### Fixed
- Tables from user table in the BBDD

## [0.0.0] - 2022-05-07
### Added
- CRUD functionalities to send register data to BBDD
