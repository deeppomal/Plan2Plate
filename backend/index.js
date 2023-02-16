require('dotenv').config()
const express = require('express')
var cors = require('cors')
const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
var User = require('./models/user')

const app = express()
mongoose.connect(process.env.DB_URL)

const db = mongoose.connection
db.on("error",(error)=>{
    console.log(error)
})
db.once("open",()=>{
    console.log('connected to DB')
})

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hi')
})

app.get('/login',(req,res) => {
    res.send('login')
})

app.post('/login', async (req,res)=>{
    try{
        User.findOne({ email: req.body.email }, function(err, user) {
            
            if(user){
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (err) res.status(401).json({message:"Error",error:err}); 
    
                    if(isMatch) res.status(201).json({id:user.id,firstname:user.firstname,lastname:user.lastname,email:user.email})
                    else res.status(401).json({message:"Invalid password"})
                });
            }
            else{
                res.status(401).json({message:`No user found with this username: ${req.body.email}`})
            } 
           
        });
    }
    catch(err){
        res.status(400).json({ message: err.message })
    }
})

app.get('/register',(req,res) => {
    res.send('register')
})

app.post('/register',async(req,res) => {
    try{
        var user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });

        user.save(function(err) {
            if (err) throw err;
            res.status(201).json({id:user.id,firstname:user.firstname,lastname:user.lastname,email:user.email})
        });
       
    }
    catch(err){
        res.status(400).json({ message: err.message })
    }
})

app.listen(3000)