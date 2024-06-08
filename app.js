const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')




mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Welcome to the mongodb !!!")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))




// const customMiddleware = (req,res,next)=>{
//     console.log("Middleware executed")
//     next()
// }

// //app.use(customMiddleware)


// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("Hello World")
// })

// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("About")
//     res.send("About page")
// })

 app.listen(PORT, ()=>{
    console.log(`Server is running on port`,PORT)
 })

