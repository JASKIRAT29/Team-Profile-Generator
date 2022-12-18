const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const addManagerCard = require('./src/src-manager');
const addEngineerCard = require('./src/src-engineer');
const addInternCard = require('./src/src-intern');
const wrapProfileCards = require('./src/src-employee');

// Array to hold all team members
const team = [];
// Add manager
const addManager = [
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
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
      },
];

// Add engineer
const addEngineer = [
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
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

  // Add intern
  const addIntern = [
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
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

ask(addManager);

// function added
function ask(questionArr) {
    inquirer
      .prompt(questionArr)
      .then((member) => {
        team.push(member);
        console.log (team);
  
        if (member.upNext === 'Add Engineer') {
          ask(addEngineer);
        } else if (member.upNext === 'Add Intern') {
          ask(addIntern);
        } else {
          createProfiles(team);
        }
      })
      .catch((err) => console.log(err));
  }


function createProfiles(team) {
    
    const profiles = team.map((member) => {
      const { name, id, email } = member;
  
      // If statement
      if (member.hasOwnProperty('officeNumber')) {
        const { managerName, managerId ,managerEmail,officeNumber } = member;
        return new Manager(managerName, managerId ,managerEmail,officeNumber);
      }
      if (member.hasOwnProperty('github')) {
        const { github } = member;
        return new Engineer(name, id, email, github);
      }
  
     // if statement for school
      if (member.hasOwnProperty('school')) {
        const { school } = member;
        return new Intern(name, id, email, school);
      }
    });
  
    // Generate HTML from the profiles made
    generateHtml(profiles);
  }

  function generateHtml(profiles) {
      let profileCards = '';
      profiles.forEach((profile) => {
        if (profile instanceof Manager) {
          const card = addManagerCard(profile);
          profileCards += card;
        } else if (profile instanceof Engineer) {
          const card = addEngineerCard(profile);
          profileCards += card;
        } else if (profile instanceof Intern) {
          const card = addInternCard(profile);
          profileCards += card;
        }
  })


const newHtml = wrapProfileCards(profileCards);

writeHtml(newHtml);
};

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
    fs.writeFile('./dist/team-profile.html', newHtml, (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
  };