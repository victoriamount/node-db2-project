
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
        table.increments();
        table.decimal('VIN').unique().notNullable();
        table.text('make', 128).notNullable();
        table.text('model', 128).notNullable();
        table.decimal('mileage').notNullable();
        table.text('transmissionType');
        table.text('titleStatus');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
