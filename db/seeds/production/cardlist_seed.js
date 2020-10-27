exports.seed = function(knex, Promise) {
  return knex('cardlist').del() //deletes all existing entries
    .then(function() {
      return knex('cardlist').insert({
        content:'Ebolavirus',
        set: 1
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Causes hemorrhagic fever',
        set: 1
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Denguevirus',
        set: 2
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Causes a disease also known as break bone fever',
        set: 2
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Borrelia burgdorferi',
        set: 3
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Causes Lyme disease',
        set: 3
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Measles virus',
        set: 4
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Usually vaccinated against in combination with mumps and rubella',
        set: 4
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Hanta virus',
        set: 5
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Spread by rodents',
        set: 5
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Clostridium Difficile',
        set: 6
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Opportunistic pathogen that infects gastrointestinal tract',
        set: 6
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Staphylococcus aureus',
        set: 7
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'A normal part of the microbiota that can sometimes cause skin infections',
        set: 7
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Influenzavirus',
        set: 8
      })
    }).then(function() {
      return knex('cardlist').insert({
        content:'Viral genome is divided into 8 separate segments',
        set: 8
      })
    })
};
