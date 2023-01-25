const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const promptQuestions = require("./utils/promptQuestions");

// function to initialize program
function init() {
    console.log('Welcome to the README file Generator\n------------------------------------');

    //Call the prompt questions function to show questions to user
    promptQuestions();
}

// function call to initialize program
init();
