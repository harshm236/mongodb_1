Ans 1 => 1. use Human_Resourse
         2. db.createCollection("employee")

Ans 2 => db.employee.find()

Ans 3 => db.employee.find({"salary":{"$gt":30000}})

Ans 4 => db.employee.find({"overallExp":{"$gt":"2 years"}})

Ans 5 => db.employee.find({"overallExp":{"$gt":"1 years"},{"yearGrad":{"$gt":"2015"}}})

Ans 6 => db.employee.updateMany({"salary":{"$gt":"70000"}},{"salary":{"$set":"65000"}})

Ans 7 => db.employee.deleteMany({"lastCompany":"Y"})