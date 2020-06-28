const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
// inquirer.prompt([
    // only first question prompts and processes before you can answer
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message: "Write a description on the project.",
    name: "description",
  },

  {
    type: "input",
    message: "Table of Contents:",
    name: "table",
  },

  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install",
  },

  {
    type: "input",
    message: "How is your project used/how do you use it?",
    name: "use",
  },

  {
    type: "input",
    message: "What license are you using?",
    name: "license",
  },

  {
    type: "input",
    message: "Other contributors?",
    name: "contributing",
  },

  {
    type: "input",
    message: "Testing instructions?",
    name: "tests",
  },

  {
    type: "input",
    message: "If questions?",
    name: "questions",
  },

  {
    type: "input",
    message: "What is your Github username?",
    name: "gitHubUserName",
  },

  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
]

// function to write README file
// function writeToFile() {

// }

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((response) => {
            fs.appendFileSync('README.md', '# ' + response.title + '\n', function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
                console.log(process.argv);
            })
            fs.appendFileSync('README.md', response.description + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## Table of Contents: ' + '\n' + response.table + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## Installaion Instructions: ' + '\n' + response.install + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## How to Use: ' + '\n' + response.use + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## License: ' + '\n' + response.license + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## Other Contributors: ' + '\n' + response.contributing + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## Explain How to Run Tests: ' + '\n' + response.tests + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        
            fs.appendFileSync('README.md', '## Questions: ' + '\n' + response.questions + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
            fs.appendFileSync('README.md', '### Developed by: ' + '\n' + response.gitHubUserName + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
            fs.appendFileSync('README.md', '### Email: ' + '\n' + response.email + '\n', function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        })   
}

// function call to initialize program
init();
