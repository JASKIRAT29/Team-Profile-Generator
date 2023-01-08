const generalQuestion =
{
    name: 'nextStep',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
    message: 'What would you like to do next?',
};
const addManagerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your team managers name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter employee ID for the manager:',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter email address for the manager:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number:',
    },
    generalQuestion
];

const addEngineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "Please enter the name of the engineer:"
    },
    {
        name: 'id',
        type: 'input',
        message: "Please enter the ID of the engineer:"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?"
    },
    {
        name: 'github',
        type: 'input',
        message: "Please enter the engineer's Github username:"
    },
    generalQuestion,
];

const addInternQuestions = [
    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the intern's employee ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "Please enter the intern's email address:"
    },
    {
        name: 'school',
        type: 'input',
        message: "What college or university does the intern attend?"
    },
    generalQuestion,
];

module.exports = { generalQuestion, addManagerQuestions, addEngineerQuestions, addInternQuestions };