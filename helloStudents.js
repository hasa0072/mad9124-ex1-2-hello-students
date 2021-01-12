'use strict'

// 1. Read the JSON file into a variable called students
let students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
students.forEach(elem => {
    console.log(`Hello ${elem.firstName} ${elem.lastName}`);
});

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
let dStudents = students.filter(elem => {
    // just in case, lowercase all characters for easier comparison
    let lastName = elem.lastName.toLowerCase();

    // get first character of last name
    let firstChar = lastName.charAt(0);

    // return true if it starts with 'd'
    return firstChar == 'd';
});

console.log(`Count of last names starting with D is ${dStudents.length}`);
