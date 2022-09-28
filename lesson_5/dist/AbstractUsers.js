"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    userList = [];
    add(item) {
        this.userList.push(item);
    }
    remove(id) {
        return this.userList.find((item, index) => {
            if (item.id === id) {
                this.userList.splice(index, 1);
                return true;
            }
        }) ? true : false;
    }
    get(id) {
        return this.userList.find(item => item.id === id) ?? null;
    }
}
exports.Users = Users;
