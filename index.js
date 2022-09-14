// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Test function
function testFunction() {
    console.log(questions);
}
// TODO: Create an array of questions for user input
let title = "";
let description = "";
let questions = [title,description];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    function inquirerPrompt() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'Name',
                },
                {
                    type: 'input',
                    message: 'What is your job title?',
                    name: 'Title',
                },
                {
                    type: 'input',
                    message: 'What is your ID',
                    name: 'ID',
                },
            ])
            .then((UserData) => {
                title = UserData.title;
                description = UserData.description;
                questions = [title,description];
                testFunction();
            });

    }
    inquirerPrompt();
}

// Function call to initialize app
init();
