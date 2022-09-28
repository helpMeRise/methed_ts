"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("./Students");
const Employees_1 = require("./Employees");
const students = new Students_1.Students();
const employees = new Employees_1.Employees();
students.add({
    id: 1,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 22,
    year: 2,
    specialty: 'asd',
});
students.add({
    id: 2,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 23,
    year: 3,
    specialty: 'aswd',
});
students.add({
    id: 3,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 24,
    year: 4,
    specialty: 'aswd',
});
students.add({
    id: 4,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 26,
    year: 1,
    specialty: 'asswd',
});
students.add({
    id: 5,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 25,
    year: 3,
    specialty: 'aaswd',
});
employees.add({
    id: 1,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 26,
    post: 'worker',
});
employees.add({
    id: 2,
    firstname: 'Maks',
    surname: 'Leskin',
    age: 26,
    post: 'Teacher',
});
console.log(students);
console.log(employees);
students.remove(2);
console.log(students);
console.log(students.get(3));
console.log(employees.get(2));
