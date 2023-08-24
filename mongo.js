require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://anantabhsah:hehe@cluster1000.ecrxewn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=>{
    console.log("mongo connected");

}).catch((e)=>{
    console.log('mongo is facing error in connection', e);
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
});

const collection = mongoose.model("collection", newSchema);

module.exports=collection