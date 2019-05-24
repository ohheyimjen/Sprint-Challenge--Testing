
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', tbl => {
    tbl.increments();

    tbl.string('name', 128).notNullable();

    tbl.string('genre').notNullable();

    tbl.string('releaseYear');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
