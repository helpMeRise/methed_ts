
class Job {
  protected _role: string
  protected _salary: number

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get salaryInfo(): number {
    return this._salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`)
  }
}

class Person {
  protected job: Job
  protected name: string

  constructor (name: string, job: Job) {
    this.name = name;
    this.job = job;
  }

  set jobChange(newJob: Job) {
    this.job = newJob;
  }

  getSalary(): number {
    return this.job.salaryInfo;
  }

  work(): void {
    this.job.work(this.name);
  }

}



const driver: Job = new Job ('Driver', 15_000);
const webDeveloper: Job = new Job('Web developer', 150_000);
const actor: Job = new Job('Actor', 1_000_000);

const personDriver: Person = new Person('John', driver);
const personActor: Person = new Person('Alex', actor);
const personDeveloper: Person = new Person('Michael', webDeveloper);

console.log('personDriver: ', personDriver);
personDriver.jobChange = actor;

console.log('personDriver: ', personDriver);
console.log('personActor: ', personActor);
console.log('personDeveloper: ', personDeveloper);

console.log(personDriver.getSalary());
console.log(personDriver.work());