
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 123123, make: 'Pontiac', model: 'GTO', mileage: 12613,  transmissionType: 'Manual', titleStatus:'Clear'},
        {VIN: 456456, make: 'Chrysler', model: 'Crossfire', mileage: 100103,  transmissionType: 'Automatic', titleStatus:'Salvage'},
        {VIN: 789789, make: 'Toyota', model: 'Yaris', mileage: 206013,  transmissionType: 'Automatic', titleStatus:'Reconstructed'},
        {VIN: 010010, make: 'Mazda', model: 'MX-5', mileage: 56130,  transmissionType: 'Automatic', titleStatus:'Clear'},
      ]);
    });
};
