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
    organization: "cyber 71"; //literal type
    firstName: string;
    middleName?:string; // optional type
    lastName: string;
} = {
    organization: "cyber 71",
    firstName: "cyber",
    middleName: "security",
    lastName: "hacker"
}


console.log(user);