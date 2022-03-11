const mongoose = require("mongoose")

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

module.exports = DogModel;