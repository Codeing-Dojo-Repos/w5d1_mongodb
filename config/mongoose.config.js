const mongoose = require("mongoose")
const databaseName = "dogs"

mongoose.connect("mongodb://localhost/" + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( ()=> {
    console.log("You connection to the " + databaseName + " collection" )
})
.catch( (err) => {
    console.log("error while connecting to " + databaseName)
})