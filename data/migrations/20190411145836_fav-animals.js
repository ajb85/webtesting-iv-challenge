exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .unique()
        .notNullable();

      tbl.string("password", 128).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();

      tbl
        .string("animal", 128)
        .unique()
        .notNullable();
    })
    .createTable("user_animals", tbl => {
      tbl.increments();

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("animal_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("animals")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return dropTableIfExists("user_animals")
    .dropTableIfExists("animals")
    .dropTableIfExists("users");
};
