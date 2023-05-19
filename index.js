const express = require('express')
const app=express()
app.get('/',(req,res)=>{
    let date=new Date()
    res.send(`Today's Date is: ${date}`)
})
app.listen(3000)