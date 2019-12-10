
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();

        tbl.string("name", 255)
            .notNullable()
            .unique()
            .index(); 

        tbl.boolean("like_it").defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("veggies");
};
