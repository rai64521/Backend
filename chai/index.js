import express from 'express'
import 'dotenv/config'


const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter page")
})

app.get("/login",(req,res)=>{
    res.send('<h1>Please Login at Chai aur Code</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Youtube: Sumant Rai</h2>")
})

app.listen(process.env.PORT ,()=>{
    console.log(`Example app Listening on port ${port}`);
    
})