// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project. (Required)',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide any installation instructions here.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide the main use case for your project/application here.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines for users that contribute to your project/application.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Which tests have you performed that you would like to include in your README?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: ['Apache 2.0', 'BSD 3', 'GNU GPL', 'MIT', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? (Required)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
    },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response)=>{
    console.log("Creating your custom README file...");
    // writeToFile("README.md", generateMarkdown(response));
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
    );
  });
}

// Function call to initialize app
init();
