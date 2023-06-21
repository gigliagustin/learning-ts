"use strict";
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[] // string array
//   role: [number, string] //tuple
// } = {
//   name: 'Agustin',
//   age: 26,
//   hobbies: ['Paintball', 'Coding', 'Gaming'],
//   role: [0, 'admin']
// }
// NOTE: personalized types starts always with an uppercase. E.G: Role
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Agustin',
    age: 26,
    hobbies: ['Paintball', 'Coding', 'Gaming'],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.ADMIN) {
    console.log('Is an admin');
}
