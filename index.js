const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000;

app.use(bodyParser.urlencoded({extended: true}))
app.listen(PORT, (req, res)=>{
    console.log('server is running on port:', PORT)
})
// app.get('/',(req, res)=>{
//     // res.send('<h1>My first app</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
// app.get('/aboutus', (req, res)=>{
//     // res.send('<h1>About us</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'aboutus.html'))
// })
// app.get('/contactus', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'contactus.html'))
// })
// app.use(express.static(path.join(__dirname, 'public')))



// app.get('/signUp', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'registration', 'signUp.html'))
// })

app.use(express.static(path.join(__dirname, 'registration')))
app.post('/signUp.html', (req, res)=>{
    res.send(req.body)
})