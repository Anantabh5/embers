const express = require('express');
const collection = require('./mongo');

const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const cors = require('cors');
app.use(cors());
app.get("/", cors(),(req,res)=>{

})

app.post("/", async(req,res)=>{
    const {email,password} = req.body;

    try{
        const checker = await collection.findOne({email:email});

        if(checker){
            res.json("exists");
        }
        else{
            res.json("does not exist");
        }
    }catch(error){
        console.log(error)
        res.json("does not exist");

    }
})

app.post("/signup", async(req,res)=>{
    const {email,password} = req.body;

    const data={
        email:email,
        password:password
    }

    try{
        const checker = await collection.findOne({email:email})

        if(checker){
            res.json("exists");
        }
        else{
            res.json("does not exist");
            await collection.insertMany([data]);
        }
    }catch(error){
        console.log(error)
        res.json("does not exist");

    }
})

app.listen(8000,()=>{
    console.log("port listening ");
})