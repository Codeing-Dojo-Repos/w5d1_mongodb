
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


// mongoose shizzle
const mongoose = require("mongoose")
const databaseName = "dogs"

mongoose.connect("mongodb://localhost/" + databaseName, {
    useNewUrlParser: true,
    userUnifiedTopology: true
})
.then( ()=> {
    console.log("You connection to the" + databaseName + "collection" )
})
.catch( (err) => {
    console.log("error while connecting to " + databaseName)
})

const DogSchema = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:Number
    },
    isFriendly: {
        type:Boolean
    }
}, {timestamps: true})

const DogModel = mongoose.model("Dog", DogSchema);




//
app.get('/', (req, resp) => {
    return resp.json({message:"Hello!"})
})

// create a dog document
app.post('/api/dogs/create', (req,resp) => {
    console.log('inside create dog route')
    console.log(req.body)

    DogModel.create(req.body)
        .then( (newDog) => {
            console.log("new dog created success")
            return resp.json(newDog)
        })
        .catch( (err) => {
            console.log(`err: ${err}`)
            return resp.json(err)
        })
    
})

app.listen(8000, ()=>{
    console.log("server started... port 8000")
})
