const { getAll, add, del } = require("../controllers/course.controller")

const router = require("express").Router()

router.get("/getAll/:name",getAll)

router.post("/add/:name",add)

router.delete("/del/:id/:name",del)

module.exports = router