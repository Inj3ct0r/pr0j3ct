# <center>Glossary of concepts

## <center>Introdution
----
For this project we will be working with the PERN stack. Our remote repository will be located in BitBucket, we will also be using SourceTree as our local repository to help with all data transport.

<p align="center">
  <img src="https://i.stack.imgur.com/MgaV9.png" />
</p>

## <center>PERN Stack
----
The PERN stack is composed by **PostgreSQL, Express, React and Node.js**. Combining these technologies will allow us to create a Full-Stack App with functioning CRUD operations (**create, read, update and delete**).

<p align="center">
  <img src="https://miro.medium.com/max/1200/1*FKfDYnucBeQLpwx5O8Mqzg.png" width="400"/>
</p>

## <center>PostgreSQL
-----
PostgreSQL is a powerful **relational** database manager with emphasis in extensibility compliance of standards that use and expand the SQL language. It is characterized by its great versatility, stability and safety.

Before starting the summary, lets see some variable types:

    INT: Numeric variable

    VARCHAR: String of variable length

    NOT NULL/NULL: Variable is allowed or not to be null

    UNIQUE: No duplicates

    PRIMARY KEY: The main row of the table, all values are UNIQUE by default

    FOREIGN KEY: Row pointing to a row of another table

With this in mind, lets check how to create tables and use the operations of INSERT, SELECT, UPDATE and DELETE

- ### Creating a table
To create a table we use the keyword CREATE TABLE and input our table name, we open a parenthesis and inside it we define all rows with ther variable type and corresponding name, **ROW NAMES MUST BE IN LOWERCASE**. The following table was created with 4 rows, assigning "first" as the Primary Key and "sec_ond" as a Foreign Key.
```SQL
CREATE TABLE test
(
    first INT,
    sec_ond VARCHAR(255),
    th1rd VARCHAR,
    fourth INT NOT NULL UNIQUE,

    PRIMARY KEY (first),
    FOREIGN KEY (sec_ond) REFERENCES table2(sec_ond)
);
```
- ### Inserting values
To insert values in rows we use the keyword INSERT INTO, then we input the name of our table and then we use the keyword VALUES(), inside of the parenthesis we have to take consideration that each position represents a different row, for example the first position must be an INT value as stated in the previous queries
```sql  
INSERT INTO test VALUES(INT,VARCHAR(255),VARCHAR,INT NOT NULL UNIQUE);
```
With this in consideration, inserting values should lokk like this:
```sql  
INSERT INTO test VALUES(123,'Second value','third value',1337);
```
Leaving a blank space will be considered as a NULL value.

- ### Selecting elements

To select elements we first use the keyword SELECT to determine the desired element, then we determine what table is the element from with the keyword FROM, the following query will return all values contained in row "sec_ond" of the table `test`
```sql  
SELECT sec_ond FROM test;
```
To return all elements of a table we use the asterisk symbol (`*`)
```sql  
SELECT * FROM test;
```
- ### Update values
- ### Delete values

Coming soon...

## <center>Express
----
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build a **single page, multipage, and hybrid web application**. It's a layer built on the top of the Node js that helps manage servers and routes.

The following is a _**Hello World**_ script using Express:

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
```
This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

**Middleware** functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Types of express middleware
- Application level middleware app.use
- Router level middleware router.use
- Built-in middleware express.static,express.json,express.urlencoded
- Error handling middleware app.use(err,req,res,next)
- Thirdparty middleware bodyparser,cookieparser

## <center>React
----
React is a declarative, efficient, and flexible **JavaScript** library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called **components**, we use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

Most React developers use a special syntax called **JSX** which makes these structures easier to write, altough React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

The following is a Hello World script using React:

```javascript
// index.js
import React from 'react'    
import { render } from 'react-dom'    
import HelloWorld from './HelloWorld'    
    
render((    
  <HelloWorld/>    
), document.getElementById('root'))

// HelloWorld.js
class HelloWorld extends React.Component{    
    
  render(){    
    return(    
      <h1>Hello World!</h1>    
    )    
  }    
}    
export default HelloWorld
```
>To run this script we type in the terminal "npm start", it will search for the index.js file and open your browser with your localhost port as URL, where it will render all your components and show us the result.

<p align="center">
  <img src="https://www.oscarblancarteblog.com/wp-content/uploads/2017/11/Hello-World-con-React-manual.png" width="500"/>
</p>

[Glossary of React Terms](https://reactjs.org/docs/glossary.html)

## <center>Node
----
Node.js is a software platform for scalable server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on Mac OS X, Windows, and Linux without changes.

Node.js applications are designed to maximize throughput and efficiency, using non-blocking I/O and asynchronous events. Node.js applications run single-threaded, although Node.js uses multiple threads for file and network events. Node.js is commonly used for real-time applications due to its asynchronous nature.

Node.js internally uses the Google V8 JavaScript engine to execute code; a large percentage of the basic modules are written in JavaScript. Node.js contains a built-in, asynchronous I/O library for file, socket, and HTTP communication. The HTTP and socket support allows Node.js to act as a web server without additional software such as Apache.

The following is a **Hello World** script using Node (altough is much easier doing this with Express):

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## <center>Markdown
----
_Check source code for more details_

```
Similar to LaTeX, Markdown can be defined as a plain text formatting syntax used to write content on the web. It’s commonly used by writers and programmers to write quickly without having to take time using the formatting toolbar of text editors
```

_This_ is a **certified** markdown **_file_**

This document is based in the [markdown](https://markdownguide.org/) format. 

Everything was searched in [https://google.com/][Google]

![ejemplo][image]

[image]: https://fileinfo.com/img/ss/sm/png_79.png

# Big text
## Somewhat big text
### Normal ish text
#### Normal text
##### And so on
###### And on

$$ This turned my text into funny words $$

$$$ And this turns me text red $$
