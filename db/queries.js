const knex = require('./knex.js');

function Cards() {
    return knex('cardlist');
}

function getAll() {
    return Cards().select();
}

function getNumberCards(setArray) {
    //FIXME: Grab the cards in the sets given by the array
    return Cards().select('*').whereIn('set', setArray);
}

module.exports = {
    getAll: getAll,
    getNumberCards: getNumberCards
};