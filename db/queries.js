const knex = require('./knex.js');

function Cards() {
    return knex('cardlist');
}

function getAll() {
    return Cards().select();
}

module.exports = {
    getAll: getAll
};