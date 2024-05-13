import inquirer from "inquirer";
//step 1: make class of student and person
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person;
//step2: make function 
const programStart = async (persons) => {
    do {
        console.log("hello! welcome.");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        //step3:using if else statements for diff choices:
        //          for staff
        if (ans.select == "staff") {
            console.log("Welcome to staff room, now feel free to ask!");
        }
        //           for student
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter student's name for interact with.."
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hey! i am ${name.name}, Nice to meet you!`);
                console.log("New student added.");
                console.log(persons.students);
            }
            else {
                console.log(`Hey! i am ${student.name}`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting program..");
            process.exit();
        }
    } while (true);
};
// step3: call the function
programStart(persons);
