const dogController = require('../controllers/dog.controller')

module.exports = (app) => {
    app.get('/api/dogs/getAll', dogController.getAllDogs)
    
    app.get('/api/dogs/:dogId', dogController.getDogById)
    
    app.post('/api/dogs/create', dogController.createDog)
}

