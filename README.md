# Team profile generator

## Description 

On surface level-- this project allows a "Manager" to create an HTML page that contains both their on and all their employee's credentials. 
The user (manager) is able to create a team that consists of themself, and an infinite number of Engineers and/or Interns. 

The application itself is ran from the comand line, and users will be guided by a series of easy-to-understand prompts that will eventually generate the desired HTML page. 

"Below the hood"-- this application is built on a the core object oriented programming principle of __inheritance__.
The three types of employees (manager, engineer, & intern) all inherit base properties and methods from a parent Employee class. 
And the index.js file holding all applciation logic contains a constructor function as well that calls upon the various constructors as needed. 

A video example can be found here: [How to](https://drive.google.com/file/d/1eb2xLsJHzfE9f5Am_Df-mp36FctRIDM2/view)

## Installation
To install dependencies, run the following command:
```
npm install
```

## Utilized technologies 

This application was built using __JavaScript__.

In order to bring additional functionality to the project the following packages/technologies were implemented:
* Node.js
* npm Inquirer
* Jest
* Bootstrap

**Node.js** was used to allow this application to exist on any user's local machine (no Browser). The primary feature utilized was the File System module-- in order to write and save our generated Markdown. 

**Inquirer** was installed to easily create a Question object that propmts the user for command line inputs. These inputs are stored in an simple to parse Answer object that will be used to dynamically generate text into template literals.

**Jest** was used for all unit testing of the four base constructor functions

**Bootstrap** was implemented for quick styling

## Challenges

The biggest challenge I had with this project out of the gate was the vast scope of topics it covered. 
While the end product is fairly 'simple'-- the collection of concepts to produce it was large in number. 

Accepting/parsing through user input, dynamically generating HTML through template literals, containing all logic in 5 constructor functions, and sprinkling in new ES6 functionalities were just a few of the newer skills I had to test in building this application. 

I found myself psuedocoding, writing small chunks, and testing more so than in any of my previous work. 
I feel a sense of accomplishment on this end, and I am excited to grow even more. 

## License

Copyright (c) 2021 Zachary Dennis Samson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
