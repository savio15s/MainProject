const ages = [1,2,3,4,5,6];
//ages.push(10);

const newages = [12,34,56,78,...ages];

console.log(newages);
//Struct
const person = {
    name:"ShivajiRao Gaikwad",
    email:"gmail@superstar.com"
};

const characters = {
    char:["kalaiyan","PettaiVelan"]
};

const newPerson = {
    age:65,
    ...person,
    ...characters
}
newPerson.age = 75;
console.log(newPerson);

