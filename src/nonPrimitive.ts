// array, object

let someThings: string[] = ["hacker", "cyber", "security"];

someThings.push("ethical");

console.log(someThings); 




// TS: tuple

let coordinated: [number, number] = [20,30]

let couple: [string, string] = ["Husband", "wife"];

let ArmanNameRoll: [string, number] = ["Arman", 45];

let destination: [string, string, number] = ["Dhaka", "Chittagong", 150];

// reference type : object

const user: {
    firstName: string;
    middleName?:string; // optional type
    lastName: string;
} = {
    firstName: "cyber",
    middleName: "security",
    lastName: "hacker"
}