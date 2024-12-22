// Prompting the user for marks of 5 subjects
var subject1 = parseInt(prompt("Enter Maths marks"));
var subject2 = parseInt(prompt("Enter English marks"));
var subject3 = parseInt(prompt("Enter Urdu marks"));
var subject4 = parseInt(prompt("Enter Science marks"));
var subject5 = parseInt(prompt("Enter Computer marks"));

// Calculate total obtained marks
var result = subject1 + subject2 + subject3 + subject4 + subject5;

// Total marks
var totalMarks = 500;

// Calculate percentage
var percentage = (result / totalMarks) * 100;

// Display the result and percentage
alert("Total Marks: " + result);
alert("Percentage: " + percentage + "%");

// Log results in the console
console.log("Total Marks: " + result);
console.log("Percentage: " + percentage + "%");