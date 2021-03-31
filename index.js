//inquirer functions
//array to hold employee objects
//askManager() => add a manager, get info, addMore()
//addMore() => "type: list"; ("no") => export to HTML
//addIntern => add a intern, get intern info, addMore
//addEngineer() => add an engineer, get engineer into, addMore()

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = require("fs")
const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager= require('./lib/Manager');

const employeeInfo = [];

async function addManager() {
    try{
        const{name, id, email, officeNumber} = await inquirer.prompt([
            {
                message: "What is your manage'r name?",
                name: "name"
            },
            {
                message: "What is your manager's employee ID?",
                name: "id"
            },
            {
                message: "What is your manager's email?",
                name:"email"
            },
            {
                message: "What is your manager's office number?",
                name:"officeNumber"
            }
      
        ]);
            employeeInfo[0] = new Manager(name, id, email, officeNumber);
            addEmployee();
    }
    catch(err){
        console.log("Error in addManager")
    
    }
}

async function addIntern() {
    try{
        const{name, id, email, school} = await inquirer.prompt([
            {
                message: "What is your intern's name?",
                name: "name"
            },
            {
                message: "What is your intern's employee ID?",
                name: "id"
            },
            {
                message: "What is your intern's email?",
                name:"email"
            },
            {
                message: "What is your intern's school?",
                name:"school"
            }
      
        ]);
            employeeInfo[employeeInfo.length] = new Intern(name, id, email, school);
            addEmployee();
    }
    catch(err){
        console.log("Error in addIntern")
    
    }
}

async function addEngineer() {
    try{
        const{name, id, email, github} = await inquirer.prompt([
            {
                message: "What is your engineer's name?",
                name: "name"
            },
            {
                message: "What is your engineer's employee ID?",
                name: "id"
            },
            {
                message: "What is your engineer's email?",
                name:"email"
            },
            {
                message: "What is your engineer's github?",
                name:"github"
            }
      
        ]);
            employeeInfo[employeeInfo.length] = new Engineer(name, id, email, github);
            addEmployee();
    }
    catch(err){
        console.log("Error in addEngineer")
    
    }
}

async function addEmployee() {
    try{
        const{choice} = await inquirer.prompt([
            {   
                type: "list",
                message: "Would you like to add a new employee?",
                choices:["intern", "engineer", "no, push to html"],
                name: "choice"
            }
            
        ]);
         if (choice === "intern") {
             addIntern()
         }
         else if(choice === "engineer") {
             addEngineer()
         }
         else{
             pushHtml()
        }
    }
    catch(err){
        console.log("Error in addEmployee")
    
    }
}

function pushHtml() {
    console.log("success")

}

function postHtml {
    for (let i = 0; i < employyInfo.length; i++) {
        let title = employeeInfo[i].getTitle();

        switch(title){
            case "Manager":
                //add manager card
            break;
            case "Intern":
                //add intern card
            break;
            case "Engineer":
                //add engineer card
            break;
        }
    }
}


addManager()

