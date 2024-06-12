const router = require("express").Router()

router.get("/",(req,res)=>{
    res.render("publico/principal")
})

router.get("/cardapio",(req,res)=>{
    res.render("publico/cardapio")
})

router.get("/login",(req,res)=>{
    res.render("publico/login")
})

module.exports = router