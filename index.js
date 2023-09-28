const app = require("./app.js")
require("./server/models/populate.js")

const port = 3000;


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})