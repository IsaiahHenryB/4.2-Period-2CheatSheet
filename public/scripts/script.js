// Write conditionals for the following concepts and scenarios:

// CONCEPT 1: Logical Operators
console.log(`Concept 1: Logical Operators

`);
// Create a variable called studentGrade and set it to equal a number between 1 and 100
// Using a condtional statement with logical operators, print the student's letter grade in a message in the console based on what value is held in the variable studentGrade. This variable represents a student's percentage in the class. 
// Example: console.log(`The student's grade is: A`)
// Test out various condtions by changing the studentGrade variable and refreshing your browswer with the console open. 
let studentGrade = 68;
// WHAT TO PRINT:
// 90-100 prints A
// 80-89 prints B
// 70-79 prints C
// 60-69 prints D
// 0-59 prints F
if (studentGrade >= 90 && studentGrade <= 100){
    console.log(`The student's grade is: A`)
}
else if (studentGrade >= 80){
    console.log(`The student's grade is: B`)
}
else if (studentGrade >= 70){
    console.log(`The student's grade is: C`)
}
else if (studentGrade >= 60){
    console.log(`The student's grade is: D`)
}
else if (studentGrade <= 59 && studentGrade >=0){
    console.log(`The student's grade is: F`)
}



// CONCEPT 2: Nesting Conditionals
console.log(`



Concept 2: Nesting Conditionals

`);
// Use the conditional statement you wrote for Scenario 1 and expand it based on the following list of what to print. 
// Copy your conditional statement from Scenario 1 into Scenario 2 before proceeding. 
// Hint: Nest conditional statements by putting them in place of the original console.log lines of code from the Concept 1 scenario. 
// Test out various condtions by changing the studentGrade variable and refreshing your browswer with the console open. 

// WHAT TO PRINT:
// 98-100 prints A+
// 94-97 prints A
// 90-93 prints A-

// 88-89 prints B+
// 84-87 prints B
// 80-83 prints B-

// 78-79 prints C+
// 74-77 prints C
// 70-73 prints C-

// 68-69 prints D+
// 64-67 prints D
// 60-63 prints D-

// 0-59 prints F
if (studentGrade >= 90 && studentGrade <= 100){
    if (studentGrade >= 98 && studentGrade <= 100){
        console.log(`The student's grade is: A+`)
    }
    else if (studentGrade >= 94 && studentGrade <= 97){
        console.log(`The student's grade is: A`)
    }
    else if (studentGrade >= 90 && studentGrade <= 93){
        console.log(`The student's grade is: A-`)
    }
}
else if (studentGrade >= 80){
    if (studentGrade >= 88 && studentGrade <= 89){
        console.log(`The student's grade is: B+`)
    }
    else if (studentGrade >= 84 && studentGrade <= 87){
        console.log(`The student's grade is: B`)
    }
    else if (studentGrade >= 80 && studentGrade <= 83){
        console.log(`The student's grade is: B-`)
    }
}
else if (studentGrade >= 70){
    if (studentGrade >= 78 && studentGrade <= 79){
        console.log(`The student's grade is: C+`)
    }
    else if (studentGrade >= 74 && studentGrade <= 77){
        console.log(`The student's grade is: C`)
    }
    else if (studentGrade >= 70 && studentGrade <= 73){
        console.log(`The student's grade is: C-`)
    }
}
else if (studentGrade >= 60){
    if (studentGrade >= 68 && studentGrade <= 69){
        console.log(`The student's grade is: D+`)
    }
    else if (studentGrade >= 64 && studentGrade <= 67){
        console.log(`The student's grade is: D`)
    }
    else if (studentGrade >= 60 && studentGrade <= 63){
        console.log(`The student's grade is: D-`)
    }
}
else if (studentGrade <= 59 && studentGrade >=0){
    console.log(`The student's grade is: F`)
}








// CONCEPT 3: Ternary Operator
console.log(`



Concept 3: Ternary Operator

`);
// Write a conditional statement using the ternary operator for the following 2 scenarios:

// Create a variable called timeSinceOil and set it equal to a number that represents how many months it's been since a vehicle has had an oil change. 
//Write a conditional using the ternary operator to console.log(`No oil change needed.`); if timeSinceOil is less than 6. If timeSinceOil is 6 or more, console.log(`Get an oil change.`);
// Test out several conditions by changing the timeSince Oil variable and refreshing your browswer with the console open. 

let timeSinceOil = 3

let youreFine = timeSinceOil >= 6 ? console.log(`No oil change needed.`) : console.log(`Aight, Get an oil change.`)




// Create a variable called stopLight and set it equal to either "green", "yellow", or "red". 
// Write a conditional using the ternary operator to console.log(`Go!`); if stopLight is equal to "green" or "yellow", and console.log(`Stop!`); if stopLight is equal to "red".
// Test out all three conditions by changing the stopLight variable and refreshing your browswer with the console open. 








// CONCEPT 4: Switch Statements
console.log(`



Concept 4: Switch Statements

`);
// Write switch statements for the following 2 scenarios. 

// Create a variable called dayNum and set it equal to a whole number 1-7.
// Write a switch statement to console.log the messages provided below depending on what dayNum is. 
// Test out all possible conditions by changing the dayNum variable and refreshing your browswer with the console open. 

// What to print:
// 1 prints `Happy Monday!`
// 2 prints `Happy Tuesday!`
// 3 prints `Happy Wednesday!`
// 4 prints `Happy Thursday!`
// 5 prints `Happy Friday!`
// 6 prints `Happy Saturday!`
// 7 prints `Happy Sunday!`
// anything else prints `Not a valid day of the week.`

dayNum = 6

switch(dayNum){
    case 1 : console.log(`Happy Monday!`)
    break;
    case 2 : console.log(`Happy Tuesday!`)
    break;
    case 3 : console.log(`Happy Wednesday!`)
    break;
    case 4 : console.log(`Happy Thursday!`)
    break;
    case 5 : console.log(`Happy Friday!`)
    break;
    case 6 : console.log(`Happy Saturday!`)
    break;
    case 7 : console.log(`Happy Sunday!`)
    break;
    default:console.log("dunno what to tell ya")
}








// Create a variable called month and set it equal to a month in the year ("January", "February", "March", etc.).
// Write a switch statement to console.log the messages provided below depending on what month is. 
// Test out all possible conditions by changing the month variable and refreshing your browswer with the console open. 

// What to print:
// if month = "January", "March", "May", "July", "August", "October", or "December" print: `${month} has 31 days.`
// if month = "April", "June", "September", or "November" print: `${month} has 30 days.`
// if month = "February" print `${month} has 28 or 29 days.`
// if the month doesn't match any of those, print `${month} is not a valid month. Reset the variable and try again.`

month = "February"

switch(month){
    case "January" : console.log(`${month} has 31 days`)
    break;
    case "February" : console.log(`${month} has 28 days`)
    break;
    case "March" : console.log(`${month} has 31 days`)
    break;
    case "April" : console.log(`${month} has 30 days`)
    break;
    case "May" : console.log(`${month} has 31 days`)
    break;
    case "June" : console.log(`${month} has 30 days`)
    break;
    case "July" : console.log(`${month} has 31 days`)
    break;
    case "August" : console.log(`${month} has 31 days`)
    break;
    case "September" : console.log(`${month} has 30 days`)
    break;
    case "October" : console.log(`${month} has 31 days`)
    break;
    case "November" : console.log(`${month} has 30 days`)
    break;
    case "December" : console.log(`${month} has 31 days`)
    break;
    default:console.log("dunno what to tell ya")
}







// Upload your work to GitHub and submit the repo link in Moodle. 