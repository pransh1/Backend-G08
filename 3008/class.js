// task
University> db.Demo.deleteOne(
  {name:"Pransh"}
)
// task
University> db.Demo.deleteMany(
  {$or:
    [
      {name:"Parag"},
      {name:"Pranav"}
    ]
  }
)
// task
University> db.Demo.findOneAndDelete(
  {name:"Aarav"}
)

//task
University> db.Student.replaceOne(
  {name:"Pransh"},
  {name:"Parag"}
)

// task
University> db.Student.findOneAndUpdate(
  {name:'Pransh'},
  {$set:
    { age:20,
      subject:'English',
      marks:91,
      address:'Chandigarh University'
    }
  }
)


//task 
University> db.Student.find({
  grades: { $not: { $exists: true } }
})

 //task
 University> db.Student.find({
  marks: { $not: { $type: "int" } }
})

// task
University> db.Student.find({
  "marks:": { $exists: true, $gte: 90 }
})