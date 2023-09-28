const { getAll, add , update, del} = require("../controllers/announcement.controller")

const router=require("express").Router()

router.get("/getAll/:id",getAll)

router.post("/add/:id",add)

router.put("/update/:aId",update)

router.delete("/del/:aId",del)

module.exports = router