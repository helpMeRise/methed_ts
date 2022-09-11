"use strict";
class Job {
    _role;
    _salary;
    constructor(role, salary) {
        this._role = role;
        this._salary = salary;
    }
    get salaryInfo() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
class Person {
    job;
    name;
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    set jobChange(newJob) {
        this.job = newJob;
    }
    getSalary() {
        return this.job.salaryInfo;
    }
    work() {
        this.job.work(this.name);
    }
}
const driver = new Job('Driver', 15_000);
const webDeveloper = new Job('Web developer', 150_000);
const actor = new Job('Actor', 1_000_000);
const personDriver = new Person('John', driver);
const personActor = new Person('Alex', actor);
const personDeveloper = new Person('Michael', webDeveloper);
console.log('personDriver: ', personDriver);
personDriver.jobChange = actor;
console.log('personDriver: ', personDriver);
console.log('personActor: ', personActor);
console.log('personDeveloper: ', personDeveloper);
console.log(personDriver.getSalary());
console.log(personDriver.work());
