const router = require ('express').Router()
const fs=require('fs')
const uniqid= require("uniqid")

router.get("/api/notes", (req, res)=>{
    fs.readFile("db/db.json", "utf-8", (err, data)=>{
        if(err) throw err;
        return res.json(JSON.parse(data))
    })

})

router.post("/api/notes", (req,res)=> {
    const noteDB= JSON.parse(fs.readFileSync("./db/db.json")) 
    const  newNote=req.body
    newNote.id= uniqid()
    noteDB.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(noteDB))
    res.json(noteDB)

})

module.exports=router;