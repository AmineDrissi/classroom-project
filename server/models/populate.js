const {connection} = require("./index.js")
const {Teacher} = require("./teacher.model.js")
const {Student} = require("./student.model.js")
const {Course} = require("./course.model.js")
const {Announcement} = require("./announcement.model.js")






Teacher.hasMany(Student)
Student.belongsTo(Teacher)

// console.log(Student);

Teacher.hasMany(Course, {foreignKey:{name:"teacherId"}})
Course.belongsTo(Teacher)


Teacher.hasMany(Announcement,{foreignKey:{name:"teacherId"}})
Announcement.belongsTo(Teacher)



connection.sync({ alter: true }).then(()=>{console.log("tables created")})


