
//Given the following array of students.  
const students = [
    {
        id: 1,
        first_name: "John",
        last_name: "Smith",
        age: 21,
    }, {
        id: 2,
        first_name: "Howard",
        last_name: "Johnson",
        age: 28,
    }, {
        id: 3,
        first_name: "Tim",
        last_name: "Matthew",
        age: 17,
    }, {
        id: 4,
        first_name: "Thomas",
        last_name: "Jackson",
        age: 23,
    },
];

//********** Challenge 1 **********************
////////Create an array of all the id values.///////
//example: [1, 2, 3, 4]
const studentIds = students.map(student => {
    return student.id;
})
console.log('**challenge 1**');
console.log(studentIds);

//********** Challenge 2 **********************
////////create an array of students 21 and over./////
//example: [{id: 1,first_name: "John",last_name: "Smith",age: 21}, etc.....]
const studentAges = students.map(student => {
    if (student.age >= 21) {
        return student;
    } return null
}).filter(student => student !== null)
console.log('\n**challenge 2**');
console.log(studentAges);

//********** Challenge 3 **********************
////////get the first object from the array of students who is older than 15 but younger than 25/////
const checkAge = students.filter(student => {
    if (student.age > 15 && student.age < 25){
        return student;
    }
})
console.log('\n**challenge 3**');
console.log(checkAge[0]);

//********** Challenge 4 **********************
//un-comment the following lines (the object and the console.log).  This will cause an error. Fix the error so it will work correctly.
const myObj = {
    name: 'Chris',
    age: 38,
    location: "Florida",
    is_developer: true
};

console.log('\n**challenge 4**');
console.log(myObj.age);
