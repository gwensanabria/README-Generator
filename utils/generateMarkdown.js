// function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}
  return `
  # Title:  ${data.title}
  ## Description: ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributed)
  * [Tests](#tests)
  * [Questions](#email)
  * [Licence](#licence)
  ## Installation: ${data.install}
  ## Usage: ${data.use}
  ## Contributing: ${data.contributed}
  ## Tests: ${data.tests}
  ### Username: ${data.gitHubUserName}
  ### Email: ${data.email}
  ## Licence : 
`
}
function badgeChange(license) {
  switch (license) {
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case 'Apache License 2.0':
      return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case '2-Clause BSD License':
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case '3-Clause BSD License':
      return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "None":
      return "[![License](https://img.shields.io/badge/License-None-Red.svg)]";
  }
}

module.exports = generateMarkdown;
