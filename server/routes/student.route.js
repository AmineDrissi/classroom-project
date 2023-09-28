const router=require("express").Router()
const { getAll, add, del, getOne } = require("../controllers/student.controller.js")

router.get("/getAll/:id",getAll)

router.post("/add",add)

router.get("/:name",getOne)

router.delete("/del/:name",del)

module.exports = router