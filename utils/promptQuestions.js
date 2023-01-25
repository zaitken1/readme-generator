const inquirer = require('inquirer');
const fs = require('fs').promises;
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

//Function containing questions for user input
function promptQuestions() {
    inquirer.prompt([
        {
            name: 'title',
            message: 'Enter the title of your application',
        },
        {
            name: 'description',
            message: 'Enter a description for your application',
        },
        {
            name: 'installation',
            message: 'Enter any installation instructions for your application'
        },
        {
            name: 'usage',
            message: 'Enter instructions on how to use your application'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['Apache License 2.0', 'MIT License', 'BSD 2-Clause', 'GNU General Public License v3']
        },
        {
            name: 'contributors',
            message: 'Provide details of any other contributors'
        },
        {
            name: 'tests',
            message: 'Please provide instructions for how to test your application'
        },
        {
            name: 'username',
            message: 'Enter your GitHub username'
        },
        {
            name: 'email',
            message: 'Enter your email address'
        }
    ]).then(answers => {
        //Write user input answers to README file
        return fs.writeFile('./README.md', generateMarkdown(answers));
    });
};


module.exports = promptQuestions;