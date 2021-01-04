const express = require('express')

const path = require('path')
const app = express()
const PORT = 4000;

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
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'registartion')))