// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-black.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    Project currently licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Contact

To contact me regarding this project or with other questions, please reach out to me at ${data.email} or visit my GitHub profile at https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
