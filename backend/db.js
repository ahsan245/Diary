const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/diary"


const connectToMongo= () =>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to MongoDB");
    }
).catch((e)=>{
    console.log("Error: ",e);
});
}

module.exports = connectToMongo;