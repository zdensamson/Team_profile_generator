const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const generatePage = require('./page-template');

const managerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the team manager\'s name'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the manager\'s id?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is the manager\'s email?'
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    }
];
const engineerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the Engineer\'s name'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the Engineer\'s id?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is the Engineer\'s email?'
    },
    {
        type: 'text',
        name: 'github',
        message: 'What is the Engineer\'s github username?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    }
];
const internQuestions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the Intern\'s name'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the Intern\'s id?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is the Intern\'s email?'
    },
    {
        type: 'text',
        name: 'school',
        message: 'What school does your intern go to?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    }
];


function EmpData() {
    this.manager;
    this.engineers = [];
    this.interns = [];
};

EmpData.prototype.startQuestion = function() {
    inquirer
        .prompt(managerQuestions)
        .then(({ name, id, email, officeNumber, addEmp }) => {
            this.manager = new Manager(name, id, email, officeNumber);
        
            this.empQuestion(addEmp);
        });
};

EmpData.prototype.empQuestion = function(empType) {
    switch (empType){
        case 'Engineer':
            this.engQuestion();
            break;
         case 'Intern':
             this.intQuestion();
             break;
         case 'I don\'t want to add any more team members':
            const pageHTML = generatePage(this);
            
            fs.writeFile('../index.html', pageHTML, err => {
                if (err) throw new Error(err);
                console.log('PAGE CREATED');
            })

    }
 }
 
 EmpData.prototype.engQuestion = function() {
     inquirer
         .prompt(engineerQuestions)
         .then(({name, id, email, github, addEmp}) => {
             this.engineers.push(new Engineer(name, id, email, github));
     
             this.empQuestion(addEmp);
         });
 };
 
 EmpData.prototype.intQuestion = function() {
     inquirer
         .prompt(internQuestions)
         .then(({name, id, email, school, addEmp}) => {
             this.interns.push(new Intern(name, id, email, school));
 
             this.empQuestion(addEmp);
         })
 }

 new EmpData().startQuestion();