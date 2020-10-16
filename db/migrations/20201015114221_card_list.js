
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cardlist', function(table){
      table.increments();
      table.string('content').notNullable();
      table.integer('set').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cardlist');
};
