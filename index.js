const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 4000;
const users = require('./Users')
app.listen(PORT, (req, res)=>{
    console.log('server is running on port:', PORT)
})
app.use(bodyParser.urlencoded({extended: true}))

// let users = [
//     {name: 'kulsoom', email: 'kulsoom@gmail.com', pwd: 1234}
// ]
// app.get('/',(req, res)=>{
//  res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
//  app.get('/aboutus', (req, res)=>{
//  res.send('<h1>About us</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'aboutus.html'))
// })
// app.get('/contactus', (req, res)=>{
// res.sendFile(path.join(__dirname, 'public', 'contactus.html'))
//  })
app.use(express.static(path.join(__dirname, 'public')))
app.get('/signUp', (req,res)=>{
    res.sendFile(path.join(__dirname, 'registration', 'signUp.html'))
})

app.use(express.static(path.join(__dirname, 'registration')))
app.post('/signUp.html', (req, res)=>{
let {name, email, psw} = req.body  
let found = users.some((item)=>item.email==email)
if(found){
    res.send('<h1>user already existed</h1>')
}else{
    users.push({name, email, psw, id: users.length +1})
}
res.redirect('/signin.html')
    // res.send(req.body)
})

app.use(express.static(path.join(__dirname, 'registration')))
app.post('/signin.html', (req, res)=>{
    let {email, psw} = req.body
    let foundsign = users.some((item)=>item.email == email && item.psw === psw)
    if(foundsign){
        res.send('<h1>Welocme to the homepage</h1>')
    }else{
        res.redirect('/signin.html')
    }
})
