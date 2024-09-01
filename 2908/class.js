db.Student.find({
  $and: [
    { age: 22 },
    { marks: 90 }
  ]
})
db.Student.find({
  marks: { $gte: 80 },
  age: { $gte: 18 }
})
db.Student.find({
  grade: "A++"
})

// to find Student with marks not equal to 90
University> db.Student.find(
  { marks: 
    { $ne: 90 } 
  }
)

// to find Student with marks not equal to 90 or age not equal to 54
University> db.Student.find(
  { $nor: 
    [ 
      { marks: 
        { $eq: 90 } 
      }, 
      { age:  
        { $eq: 54 } 
      }
    ] 
  }
)
// to find Student with marks equal to 90 or age equal to 54
University> db.Student.find(
  { $or: 
    [ 
      { marks: 
        { $eq: 90 } 
      }, 
      { age:  
        { $eq: 54 } 
      }
    ] 
  }
)