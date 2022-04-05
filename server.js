const express = require('express')
const app = express()

app.get("/", (req, res)=> {
    res.send('Welcome to the homepage')

})

app.get("/contact", (req, res)=>{
    res.send("Contact me at alxpop56@yahoomail.com")
})

app.get("/about", (req, res)=> {
    res.send("Welcome to our about page. This is a page dedicated to presenting information about us")
})

app.get("/hobbies", (req,res)=> {
    res.send("Coding, fitness, movies, crypto")
})

app.listen(3000, ()=> {
    console.log('Server started on port 3000')
})