exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl
      .string("VIN", 100)
      .notNullable()
      .unique()
      .index();

    tbl.string("make", 100).notNullable();

    tbl.string("model", 100).notNullable();

    tbl.integer("mileage", 100).notNullable();

    tbl.string("trans_type", 100);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
