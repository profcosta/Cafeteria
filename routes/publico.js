const router = require("express").Router()

router.get("/",(req,res)=>{
    res.render("publico/principal")
})

module.exports = router