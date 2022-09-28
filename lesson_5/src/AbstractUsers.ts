
interface User {
  id: number;
  firstname: string;
  surname: string;
  age: number;
}

export abstract class Users<T extends User> {
  userList: T[] = [];

  add(item: T): void {
    this.userList.push(item);
  }

  remove(id: number): boolean {
    return this.userList.find((item, index) => {
      if (item.id === id) {
        this.userList.splice(index, 1);
        return true
      }
    }) ? true : false;
  }

  get(id: number): T | null {
    return this.userList.find(item => item.id === id) ?? null
  }
  
}
