const DogModel = require('../models/dog.model')

module.exports.getAllDogs = (req,resp) => {
    console.log('inside getAll')

    DogModel.find({})
        .then( (dogObject) => {
            //console.log(dogObject)
            return resp.json(dogObject)
        })
        .catch( (err) => {
            console.log(`err: ${err}`)
            return resp.json(err)
        })
}

module.exports.getDogById = (req,resp) => {
    console.log('inside get dog by id')
    console.log(`gettin' dog id: ${req.params.dogId}`)

    DogModel.findById(req.params.dogId)
        .then( (dogObject) => {
            console.log(dogObject)
            return resp.json(dogObject)
        })
        .catch( (err) => {
            console.log(`err: ${err}`)
            return resp.json(err)
        })
}

module.exports.createDog = (req,resp) => {
    console.log('inside create dog route')
    console.log(req.body)

    DogModel.create(req.body)
        .then( (newDog) => {
            console.log("Great success! new dog created")
            return resp.json(newDog)
        })
        .catch( (err) => {
            console.log(`err: ${err}`)
            return resp.json(err)
        })
    
}