
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


require('./config/mongoose.config')
// goes into mongoose.config
// const mongoose = require("mongoose")
// const databaseName = "dogs"

// mongoose.connect("mongodb://localhost/" + databaseName, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then( ()=> {
//     console.log("You connection to the " + databaseName + " collection" )
// })
// .catch( (err) => {
//     console.log("error while connecting to " + databaseName)
// })


// goes in models
// const DogSchema = new mongoose.Schema({
//     name: {
//         type:String
//     },
//     age: {
//         type:Number
//     },
//     isFriendly: {
//         type:Boolean
//     }
// }, {timestamps: true})

// const DogModel = mongoose.model("Dog", DogSchema);




//
app.get('/', (req, resp) => {
    return resp.json({message:"Hello!"})
})

const dogRoutes = require('./routes/dog.routes')
dogRoutes(app)

app.listen(8000, ()=>{
    console.log("server started... port 8000")
})
