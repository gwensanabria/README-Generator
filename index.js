const fs = require('fs')
const inquirer = require('inquirer')


// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?' ,
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a description on the project.' ,
    },
    
    {
        type: 'input',
        name: 'table of contents',
        message: '' ,
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installaion instructions?' ,
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used/how do you use it?' ,
    },

    {
        type: 'input',
        name: 'license',
        message: 'What license are you using?' ,
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Other contributors?' ,
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Testing instructions?' ,
    },

    {
        type: 'input',
        name: 'questions',
        message: 'If any questions, who to contact?' ,
    },

    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your Github username?' ,
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?' ,
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
