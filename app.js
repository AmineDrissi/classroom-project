const express = require("express")
const cors=require("cors")
const app=express()

const teacherRoute=require("./server/routes/teacher.route.js")
const studentRoute = require("./server/routes/student.route.js")
const courseRoute = require("./server/routes/course.route.js")
const announcementRoute = require("./server/routes/announcements.js")

app.use(cors())
app.use(express.static(__dirname + '/client/dist'));


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/teachers",teacherRoute)

app.use("/api/students",studentRoute)

app.use("/api/courses",courseRoute)

app.use("/api/announcements",announcementRoute)

module.exports= app