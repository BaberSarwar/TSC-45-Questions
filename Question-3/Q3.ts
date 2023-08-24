// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and title case.
let personName:string = "Babar Sarwar";
let NameLowerCase:string = personName.toLowerCase();
let NameUpperCase:string = personName.toUpperCase();

console.log(NameLowerCase);
console.log(NameUpperCase);

const personName = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ")
console.log(personName)