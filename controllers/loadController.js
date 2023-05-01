'use strict';

const { Datastore } = require('@google-cloud/datastore');
const helpers = require('./helpers');

const datastore = new Datastore({
    projectId: 'a4-rest-api',
  });
const LOAD = "Load";
const SLIP = "Slip";

/*

function get_loads() {
    const query = datastore.createQuery(LOAD);
    return datastore.runQuery(query).then(entities => {
        // id attribute added to all entities[0]
        return entities[0].map(helpers.fromDatastore);
    }).catch(err => {
        console.error('Error retrieving loads:', err);
    });
}

function get_load(id) {
    const key = helpers.getKey(datastore, LOAD, id);
    return datastore.get(key).then(entity => {
        if (entity[0] === undefined || entity[0] === null) {
            return entity;
        } else {
            return entity.map(helpers.fromDatastore);
        }
    });
}

function post_load(name, type, length) {
    var key = datastore.key(LOAD);
    const new_load = {
        "name": name,
        "type": type,
        "length": length
    }
    return datastore.save({
        "key": key,
        "data": new_load
    }).then(() => { return key });
}

function patch_load(id, name, type, length) {
    const key = helpers.getKey(datastore, LOAD, id);
    const edit_load = {
        "name": name,
        "type": type,
        "length": length
    }
    return datastore.save({
        "key": key,
        "data": edit_load
    });
}

function delete_load(id) {
    // cascade delete to slips
    const query = datastore.createQuery(SLIP);
    datastore.runQuery(query).then(entities => {
        // id attribute added to all entities[0]
        var new_entities = entities[0].map(helpers.fromDatastore)
        return helpers.cascadeDelete(datastore, new_entities, "current_load", id, SLIP);
    });

    // delete
    const key = helpers.getKey(datastore, LOAD, id);
    return datastore.delete(key);
}

*/

module.exports = {
    //get_loads,
    //get_load,
    //post_load,
    //patch_load,
    //delete_load
}