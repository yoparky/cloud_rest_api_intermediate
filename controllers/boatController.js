'use strict';

const { Datastore } = require('@google-cloud/datastore');
const helpers = require('./helpers');

const datastore = new Datastore({
    projectId: 'a4-rest-api',
  });
const BOAT = "Boat";

// Begin boat Model Functions
function post_boat(name, type, length) {
    var key = datastore.key(BOAT);
    const new_boat = {
        "name": name,
        "type": type,
        "length": length,
        "loads": []
    }
    return datastore.save({
        "key": key,
        "data": new_boat
    }).then(() => { return key });
}

function get_boat(id) {
    const key = helpers.getKey(datastore, BOAT, id);
    return datastore.get(key).then(entity => {
        if (entity[0] === undefined || entity[0] === null) {
            return entity;
        } else {
            return entity.map(helpers.fromDatastore);
        }
    });
}
///////////////////////

/*

function get_boats() {
    const query = datastore.createQuery(BOAT);
    return datastore.runQuery(query).then(entities => {
        // id attribute added to all entities[0]
        return entities[0].map(helpers.fromDatastore);
    }).catch(err => {
        console.error('Error retrieving boats:', err);
    });
}

function delete_boat(id) {
    const key = helpers.getKey(datastore, BOAT, id);
    return datastore.delete(key);
}

function put_boat_at_boat(boat_id, boat_id) {
    const boat_key = helpers.getKey(datastore, BOAT, boat_id);
    return datastore.get(boat_key).then(entity => {
        if (entity[0] === undefined || entity[0] === null) {
            return entity;
        } else {
            // Check this part
            if (entity[0].current_boat === null) {
                // boat empty
                entity[0].current_boat = boat_id;
                const data = {
                    key: boat_key,
                    data: entity[0]
                };
                return datastore.upsert(data);
                
            }
            // boat full
            return entity;
        }
    });
}

function delete_boat_leave_boat(boat_id, boat_id) {
    const boat_key = helpers.getKey(datastore, BOAT, boat_id);
    return datastore.get(boat_key).then(entity => {
        if (entity[0] === undefined || entity[0] === null) {
            return entity;
        } else {
            // Check this part
            if (entity[0].current_boat === boat_id) {
                // boat empty
                entity[0].current_boat = null;
                const data = {
                    key: boat_key,
                    data: entity[0]
                };
                return datastore.upsert(data);
            }
            // boat mismatch
            return entity;
        }
    });
}

*/

module.exports = {
    post_boat,
    get_boat,
    //get_boats,
    //delete_boat,
    //put_boat_at_boat,
    //delete_boat_leave_boat
}