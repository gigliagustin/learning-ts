"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // TOKNOW: VOID return declaration is used when you have a function that doesn't return anything.
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult
//combineValues = 5
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let userInput;
let userName;
userInput = 5;
userInput = 'Agustin';
if (typeof userInput === 'string') {
    //TOKNOW: Here don't get the error, because we are under a condition where if the userInput is of type string
    // then we could make te assignment, TS can handle this kind of uses cases. We have the guarantee that 'userName'
    // could be correctly assign by userInput.
    userName = userInput;
}
// TOKNOW: Here we can have an error because we don't know which type of data we are going to assing, 
// is not consistant, so TypeScript can know and handle an error with this tipe of data.
// userName = userInput
// TOKNOW: We can use this return type 'NEVER' only when we know that the function is never going to return anything
// this is because in this example, we are throwing an error wich stops the execution code.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
