import Second2,{ admin, Second } from "./second.js";

const user = {
    name: "Shehzad",
    age: 30
}

console.log(user.name);

console.log(admin.name);

let arr = [1,2,3,4,5];

let arr2 = arr;

arr = null;

console.log(arr2);


module.exports = {};