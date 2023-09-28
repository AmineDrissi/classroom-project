const router=require("express").Router()
const {getAll, add, getOne, del, getOneId} = require("../controllers/teacher.controller.js")

router.get("/getAll",getAll)

router.post("/add",add)

router.get("/name/:name",getOne)

router.get("/:id",getOneId)

router.delete("/del/:name",del)

module.exports = router