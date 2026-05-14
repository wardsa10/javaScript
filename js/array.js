const students = ["Dania", "Omar", "Lina", "Rami"];

students[4] = "Sara";

students.unshift("Adam");

students.splice(3, 1, "Lamar");
console.log(students);

let removedLast = students.pop();
console.log(students);

let removedFirst = students.shift();

console.log(students);

let hasRami = students.includes("Rami");

let omarIndex = students.indexOf("Omar");

let groupA = students.slice(0, 2);
console.log(groupA);

let groupB = ["Nour", "Tala"];

let allGroups = groupA.concat(groupB);

console.log(allGroups);

let groupString = allGroups.join("|");

console.log(groupString);

console.log(students.sort());

console.log(students.sort().reverse());
let seats = [1, 2, 3, 4, 5];

let reservedSeats = seats.splice(1, 3, "Reserved", "Reserved", "Reserved");

console.log(seats);

let studentsString = students.join("")
console.log(studentsString);

console.log("-----------------------");



console.log(students);
console.log(removedLast);
console.log(removedFirst);
console.log(hasRami);
console.log(omarIndex);
console.log(groupA);
console.log(allGroups);
console.log(groupString);
console.log(reservedSeats);
console.log(studentsString);




