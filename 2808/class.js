db.User.updateMany( {marks:90}, 
  { 
    $set: { grades: "A++" } 
  } 
)
University> db.User.updateMany( 
  {},
  { $set: 
    { address: "Chitkara University" } 
  }
)
University> db.User.updateMany(
  {subject: "Maths" },
  { $set: 
    { subject: "Data Science"} 
  } 
)