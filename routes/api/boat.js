'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const loadController = require('../../controllers/loadController');
const boatController = require('../../controllers/boatController');

const app = express();
app.use(bodyParser.json());
const router = express.Router();

router.post('/', function (req, res) {
    if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('type') && req.body.hasOwnProperty('length')) {
        var name = req.body.name;
        var type = req.body.type;
        var length = req.body.length;
        boatController.post_boat(name, type, length)
            .then(key => {
                // consider doing a get and returning a json of the actual db status
                res.status(201).json(
                    {
                        "id": key.id,
                        "name": name,
                        "type": type,
                        "length": length,
                        "loads": []
                    }
                )
            });
    } else {
        res.status(400).json({"Error":  "The request object is missing at least one of the required attributes"});
    }
});

router.get('/:boat_id', function (req, res) {
    boatController.get_boat(req.params.boat_id)
        .then(boat => {
            if (boat[0] === undefined || boat[0] === null) {
                // no boat with id
                res.status(404).json({"Error": "No boat with this boat_id exists"});
            } else {
                // found boat with id
                // CHECK HERE ****
                boat[0].self = req.protocol + "://" + req.get("host") + req.baseUrl + "?cursor=" + req.params.boat_id;
                res.status(200).json(boat[0]);
            }
        })
});
/////////////





/*

router.get('/', function (req, res) {
    const boats = boatController.get_boats()
        .then((boats) => {
            res.status(200).json(boats);
        });
});

router.delete('/:boat_id', function (req, res) {
    boatController.get_boat(req.params.boat_id)
        .then(boat => {
            if (boat[0] === undefined || boat[0] === null) {
                // no boat with id
                res.status(404).json({"Error": "No boat with this boat_id exists"});
            } else {
                // found boat with id
                boatController.delete_boat(req.params.boat_id)
                    .then(res.status(204).end());
            }
        })
});

router.put('/:boat_id/:load_id', function (req, res) {
    loadController.get_load(req.params.load_id)
        .then(load => {
            if (load[0] === undefined || load[0] === null) {
                // no load with id
                res.status(404).json({"Error": "The specified load and/or boat does not exist"});
            } else {
                // found load with id
                boatController.get_boat(req.params.boat_id)
                    .then(boat => {
                        if (boat[0] === undefined || boat[0] === null) {
                            // no boat with id
                            res.status(404).json({"Error": "The specified load and/or boat does not exist"});
                        } else {
                            // found the boat with id
                            if (boat[0].current_load === null) {
                                boatController.put_load_at_boat(req.params.boat_id, req.params.load_id)
                                    .then(() => res.status(204).end());
                            } else {
                                res.status(403).json({"Error": "The boat is not empty"});
                            }
                        }
                    })
            }
        })
});

router.delete('/:boat_id/:load_id', function (req, res) {
    loadController.get_load(req.params.load_id)
        .then(load => {
            if (load[0] === undefined || load[0] === null) {
                // no load with id
                res.status(404).json({"Error": "No load with this load_id is at the boat with this boat_id"});
            } else {
                // found load with id
                boatController.get_boat(req.params.boat_id)
                    .then(boat => {
                        if (boat[0] === undefined || boat[0] === null) {
                            // no boat with id
                            res.status(404).json({"Error": "No load with this load_id is at the boat with this boat_id"});
                        } else {
                            // found the boat with id
                            if (boat[0].current_load !== req.params.load_id) {
                                res.status(404).json({"Error": "No load with this load_id is at the boat with this boat_id"});
                                // put_load_at_boat(req.params.boat_id, req.params.load_id)
                                //     .then(() => res.status(204).end());
                            } else {
                                // res.status(403).json({"Error": "The boat is not empty"});
                                boatController.delete_load_leave_boat(req.params.boat_id, req.params.load_id)
                                    .then(() => res.status(204).end());
                            }
                        }
                    })
            }
        })
});

*/
module.exports = router;