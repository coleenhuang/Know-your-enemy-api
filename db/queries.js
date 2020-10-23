const knex = require('./knex.js');

function Cards() {
    return knex('cardlist');
}

function getAll() {
    return Cards().select();
}

function getNumberCards(setArray) {
    //FIXME: Grab the cards in the sets given by the array
    return Cards().select('*').where('set', setArray[0]).modify(function(queryBuilder) {
        for (let i = 1; i < setArray.length; i++){
            queryBuilder.orWhere('set', setArray[i])
        }
    });
}

module.exports = {
    getAll: getAll,
    getNumberCards: getNumberCards
};