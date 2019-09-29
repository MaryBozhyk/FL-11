const express = require('express');
const router = express.Router();

const Car = require('./handlers/car');
const data = require('../db/data.json');
const deleteAuth = require('./middlewares/delete-authorization');

router.post('/car', (req, res) => {
    const car = new Car(req.body);
    const newCar = data.find(x => x.brand === car.brand);
    if (newCar){
        res.status(409).send({"message": "Car already exists."})
    } else {
        data.push(car);
        res.status(201).send(car);
    }
});

router.get('/car', (req, res) => {
    res.status(200).send(data);
});

router.get('/car/:id', (req, res) => {
    const { id } = req.params;
    const reqCar = data.find(x => x.id === parseInt(id));
    if (reqCar){
        res.status(200).send(reqCar);
    } else {
        res.status(404).send({"message": "Car has not been found."});
    } 
});

router.put('/car/:id', (req, res) => {
    const { id } = req.params;
    const reqIndex = data.findIndex(x => x.id === parseInt(id));
    if (reqIndex !== -1){
        data.splice(reqIndex, 1, req.body);
        res.status(200).send(req.body);
    } else {
        res.status(404).send({"message": "Car has not been found."});
    } 
});

router.delete ('/car/:id', deleteAuth, (req, res) => {
    const { id } = req.params;
    const reqIndex = data.findIndex(x => x.id === parseInt(id));
    if (reqIndex !== -1){
        data.splice(reqIndex, 1);
        res.status(200).send({"message": "The car has been successfully removed"});
    } else {
        res.status(404).send({"message": "Car has not been found."});
    } 
})

module.exports = router;

