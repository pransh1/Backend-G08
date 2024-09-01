// create a database chitkara and 3 document in it user ,student and faculty with at least 5 data in it 
//user and student should have name ,age,subject and marks and faculty should have name ,age,subject and rating
db.createCollection("Student")

const user = db.Student.insertMany([{
  name:"Aman",
  age:11,
  subject:"Maths",
  marks:23,
}, {
  name: "Aarav",
  age: 14,
  subject: "Maths",
  marks: 20,
}, {
  "name": "Anurag",
  "age": 15,
  "subject": "Maths",
  "marks:": 90,
}, {
  "name": "Parag",
  "age": 12,
  "subject": "Maths",
  "marks:": 30,
}, {
  "name": "Pranav",
  "age": 16,
  "subject": "Maths",
  "marks:": 48,
}])

db.createCollection("Faculty")
const user2 = db.Faculty.insertMany([{
  name:"Rohan",
  age:43,
  subject:"Maths",
  marks:74,
}, {
  name: "Rohit",
  age: 63,
  subject: "Maths",
  marks: 70,
}, {
  "name": "John",
  "age": 60,
  "subject": "Maths",
  "marks:": 60,
}, {
  "name": "Johny",
  "age": 40,
  "subject": "Maths",
  "marks:": 5,
}, {
  "name": "Alex",
  "age": 41,
  "subject": "Maths",
  "marks:": 28,
}])

db.createCollection("User")
const User3 = db.User.insertMany([{
  name:"Pransh",
  age:22,
  subject:"Maths",
  marks:90,
}, {
  name: "Piyush",
  age: 24,
  subject: "Maths",
  marks: 54,
}, {
  "name": "Puneet",
  "age": 18,
  "subject": "Maths",
  "marks:": 84,
}, {
  "name": "Raghav",
  "age": 19,
  "subject": "Maths",
  "marks:": 4,
}, {
  "name": "Rohan",
  "age": 19,
  "subject": "Maths",
  "marks:": 74,
}])


