// const { data } = require("cypress/types/jquery");
const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


// mongoose
const mongoose = require("mongoose")
const databaseName = "dogs"

mongoose.connect("mongodg://localhost" + databaseName, {
    useNewUrlParser: true,
    userUnifiedTopology: true,
})
.then( ()=> {
    console.log("You connection to the" + databaseName + "collection" )
})
.catch( (err) => {
    console.log("error while connecting to " + databaseName)
})


//


app.get('/', (req, resp) => {
    return resp.json({message:"Hello!"})
})

app.listen(8000, ()=>{
    console.log("server started... port 8000")
})
