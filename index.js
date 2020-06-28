const fs = require("fs");
const inquirer = require("inquirer");
const gm = require("./utils/generateMarkdown.js");


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
    // type: "input",
    type: 'list',
    message: "What license are you using?",
    name: "license",
    choices: [ 
        // 'GNU General Public License (GPLv3)',
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        // 'Apache License 2.0',
        '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        // '2-Clause BSD License',
        '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        // '3-Clause BSD License', 
        '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        // 'MIT', 
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        // 'none', 
        '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    ]
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

// function writeToFile(fileName, data) {
//     fs.writeFile('license.md', data, 'utf8', function(err) {
//         if (err) throw err;
//     })
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
