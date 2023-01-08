const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const managerCardTemplate = require('./src/manager-template');
const engineerCardTemplate = require('./src/engineer-template');
const internCardTemplate = require('./src/intern-template');
const wrapProfileCards = require('./src/employee-template');
const { addManagerQuestions, addEngineerQuestions, addInternQuestions } = require('./questions');

const team = [];

askQuestions(addManagerQuestions, { role: 'manager' });

function askQuestions(questionArr, answers) {
  inquirer
    .prompt(questionArr, answers)
    .then((member) => {
      team.push(member);
      console.log(team);

      if (member.nextStep === 'Add Engineer') {
        askQuestions(addEngineerQuestions, { role: 'engineer' });
      } else if (member.nextStep === 'Add Intern') {
        askQuestions(addInternQuestions, { role: 'intern' });
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
}


function createProfiles(team) {

  const profiles = team.map((member) => {
    const { name, id, email } = member;

    if (member.role === 'manager') {
      const { managerName, managerId, managerEmail, officeNumber } = member;
      return new Manager(managerName, managerId, managerEmail, officeNumber);
    }
    if (member.role === 'engineer') {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    if (member.role === 'intern') {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  generateHtml(profiles);
}

function generateHtml(profiles) {
  let profileCards = '';
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = managerCardTemplate(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = engineerCardTemplate(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = internCardTemplate(profile);
      profileCards += card;
    }
  });
  const newHtml = wrapProfileCards(profileCards);
  writeHtml(newHtml);
};

// This functions re-generates the index.html after the user input
function writeHtml(newHtml) {
  fs.writeFile('./dist/index.html', newHtml, (err) => {
    if (err) throw err;
    console.log('HTML document successfully created in the /dist folder.');
  });
};