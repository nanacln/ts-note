"use strict";
function getUserInfo(user) {
    return `name: ${user.name}, age: ${user.age}`;
}
//可选参数|默认参数
function getUserInfo1(a = 10, b) {
    return a + String(b);
}
let obj = {
    user: [1, 2, 3],
    add(num) {
        this.user.push(num);
    }
};
obj.add(4);
console.log(obj.user); // [1,2,3,4]
//函数重载
let user = [1, 2, 3];
function findNum(ids) {
    if (ids instanceof Array) {
        return user.push(...ids);
    }
    else if (typeof ids === 'number') {
        return user.filter(item => item === ids);
    }
    else {
        return user;
    }
}
