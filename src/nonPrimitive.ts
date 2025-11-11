// array, object

let someThings: string[] = ["hacker", "cyber", "security"];

someThings.push("ethical");

console.log(someThings); 


// TS: tuple

let coordinated: [number, number] = [20,30]


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