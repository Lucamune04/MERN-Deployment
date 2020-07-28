const Ctl  = require('../controllers/pet.controller')


module.exports=app => {
        app.get('/api/pets',Ctl.getAll)
        app.post('/api/pets',Ctl.create)
        app.get('/api/pets/:id',Ctl.getOne)
        app.put('/api/pets/:id',Ctl.update)
        app.delete('/api/pets/:id',Ctl.delete)
    }