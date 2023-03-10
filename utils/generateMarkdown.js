//Function to generate license badges based on user input
let licenseBadge

function generateBadge(data) {
  if (data.license === "Apache License 2.0") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'BSD 2-Clause') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  return licenseBadge
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${generateBadge(data)}\n
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description \n ${data.description}

  ## Installation \n ${data.installation}

  ## Usage \n ${data.usage}

  ## License \n This application is covered under the ${data.license}

  ## Contributing \n ${data.contributors}

  ## Tests \n ${data.tests}

  ## Questions \n If you have any questions, please feel free to contact me via GitHub or my email below \n\n https://github.com/${data.username} \n\n ${data.email}
`;
}

module.exports = generateMarkdown;
