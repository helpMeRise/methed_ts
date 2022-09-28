import { Users } from './AbstractUsers';

interface Employee {
  id: number;
  firstname: string;
  surname: string;
  age: number;
  post: string;
}


export class Employees extends Users<Employee> {}