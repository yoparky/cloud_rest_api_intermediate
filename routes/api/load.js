'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const loadController = require('../../controllers/loadController');

const app = express();
app.use(bodyParser.json());
const router = express.Router();



/*

router.post('/', function (req, res) {
    if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('type') && req.body.hasOwnProperty('length')) {
        var name = req.body.name;
        var type = req.body.type;
        var length = req.body.length;
        loadController.post_load(name, type, length)
            .then(key => {
                res.status(201).json(
                    {
                        "id": key.id,
                        "name": name,
                        "type": type,
                        "length": length,
                    }
                )
            });
    } else {
        res.status(400).json({"Error": "The request object is missing at least one of the required attributes"});
    }
});

router.get('/:load_id', function (req, res) {
        loadController.get_load(req.params.load_id)
        .then(load => {
            if (load[0] === undefined || load[0] === null) {
                // no load with id
                res.status(404).json({"Error": "No load with this load_id exists"});
            } else {
                // found load with id
                res.status(200).json(load[0]);
            }
        })
});

router.get('/', function (req, res) {
    const loads = loadController.get_loads()
        .then((loads) => {
            res.status(200).json(loads);
        });
});

router.patch('/:load_id', function (req, res) {
    loadController.get_load(req.params.load_id)
        .then(load => {
            if (load[0] === undefined || load[0] === null) {
                // no load with id
                res.status(404).json({"Error": "No load with this load_id exists"});
            } else {
                // found load with id
                if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('type') && req.body.hasOwnProperty('length')) {
                    var name = req.body.name;
                    var type = req.body.type;
                    var length = req.body.length;
                    loadController.patch_load(req.params.load_id, name, type, length)
                        .then(key => {
                            res.status(200).json(
                                {
                                    "id": key.id,
                                    "name": name,
                                    "type": type,
                                    "length": length,
                                }
                            )
                        });
                } else {
                    res.status(400).json({"Error": "The request object is missing at least one of the required attributes"});
                }
            }
        })
});

router.delete('/:load_id', function (req, res) {
    loadController.get_load(req.params.load_id)
        .then(load => {
            if (load[0] === undefined || load[0] === null) {
                // no load with id
                res.status(404).json({"Error": "No load with this load_id exists"});
            } else {
                // found load with id
                loadController.delete_load(req.params.load_id)
                    .then(res.status(204).end());
            }
        })
});

*/

module.exports = router;