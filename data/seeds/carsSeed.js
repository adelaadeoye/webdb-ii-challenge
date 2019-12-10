
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "dae", make: 'toyoota',model:"30213236",mileage:"10km"},
        {VIN: "capture", make: 'innosion',model:"21",mileage:"10km"},
        {VIN: "build", make: 'volvo',model:"30216",mileage:"10km"}
      ]);
    });
};
