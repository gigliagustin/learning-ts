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
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person: {
  name: string,
  age: number,
  hobbies: string[] // string array
  // role: [number, string] //tuple\
  role: Role.ADMIN // enum Type
} = {
  name: 'Agustin',
  age: 26,
  hobbies: ['Paintball', 'Coding', 'Gaming'],
  role: Role.ADMIN
}

console.log(person)

if (person.role === Role.ADMIN) {
  console.log('Is an admin')
}
