//inquirer functions
//array to hold employee objects
//askManager() => add a manager, get info, addMore()
//addMore() => "type: list"; ("no") => export to HTML
//addIntern => add a intern, get intern info, addMore
//addEngineer() => add an engineer, get engineer into, addMore()



const fs = require("fs")
const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const employeeInfo = [];

async function addManager() {
    try {
        const {
            name,
            id,
            email,
            officeNumber
        } = await inquirer.prompt([{
                message: "What is your manage'r name?",
                name: "name"
            },
            {
                message: "What is your manager's employee ID?",
                name: "id"
            },
            {
                message: "What is your manager's email?",
                name: "email"
            },
            {
                message: "What is your manager's office number?",
                name: "officeNumber"
            }

        ]);
        employeeInfo[0] = new Manager(name, id, email, officeNumber);
        addEmployee();
    } catch (err) {
        console.log("Error in addManager")

    }
}

async function addIntern() {
    try {
        const {
            name,
            id,
            email,
            school
        } = await inquirer.prompt([{
                message: "What is your intern's name?",
                name: "name"
            },
            {
                message: "What is your intern's employee ID?",
                name: "id"
            },
            {
                message: "What is your intern's email?",
                name: "email"
            },
            {
                message: "What is your intern's school?",
                name: "school"
            }

        ]);
        employeeInfo[employeeInfo.length] = new Intern(name, id, email, school);
        addEmployee();
    } catch (err) {
        console.log("Error in addIntern")

    }
}

async function addEngineer() {
    try {
        const {
            name,
            id,
            email,
            github
        } = await inquirer.prompt([{
                message: "What is your engineer's name?",
                name: "name"
            },
            {
                message: "What is your engineer's employee ID?",
                name: "id"
            },
            {
                message: "What is your engineer's email?",
                name: "email"
            },
            {
                message: "What is your engineer's github?",
                name: "github"
            }

        ]);
        employeeInfo[employeeInfo.length] = new Engineer(name, id, email, github);
        addEmployee();
    } catch (err) {
        console.log("Error in addEngineer")

    }
}

async function addEmployee() {
    try {
        const {
            choice
        } = await inquirer.prompt([{
                type: "list",
                message: "Would you like to add a new employee?",
                choices: ["intern", "engineer", "no, push to html"],
                name: "choice"
            }

        ]);
        if (choice === "intern") {
            addIntern()
        } else if (choice === "engineer") {
            addEngineer()
        } else {
            postHtml()
        }
    } catch (err) {
        console.log("Error in addEmployee")

    }
}



async function postHtml() {
    try {
        let content = "";
        for (let i = 0; i < employeeInfo.length; i++) {
            let title = employeeInfo[i].getRole();

            switch (title) {
                case "Manager":
                    content += `<div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Manager</div>
                    <div class="card-body text-dark">
                    <h2>${employeeInfo[0].name}</h2>
                    <p>${employeeInfo[0].id}</p>
                    <a href= ${employeeInfo[i].email} target="_blank">${employeeInfo[i].email}</a>
                    <p>${employeeInfo[0].officeNumber}: </p>
                    </div>
                    </div>`
                    break;
                case "Intern":
                    content += `<div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Intern</div>
                    <div class="card-body text-dark">
                    <h2>${employeeInfo[i].name}</h2>
                    <p>${employeeInfo[i].id}</p>
                    <a href= ${employeeInfo[i].email} target="_blank">${employeeInfo[i].email}</a>
                    <p>${employeeInfo[i].school}</a>
                    </div>
                    </div>`
                    break;
                case "Engineer":
                    content += `<div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Engineer</div>
                    <div class="card-body text-dark">
                    <h2>${employeeInfo[i].name}</h2>
                    <p>${employeeInfo[i].id}</p>
                    <a href=${employeeInfo[i].email} target="_blank">${employeeInfo[i].email}</a>
                    <a href=${employeeInfo[i].github} target="_blank">${employeeInfo[i].github}</a>
                    </div>
                    </div>`
                    break;
            }
        }
        const form = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    ${content}
    </body>
    </html>
    `


        await writeFileAsync("./dist/index.html", form, "utf8")
    } catch (err) {
        console.log("there seems to be an error")

    }
}


addManager()