
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'This is where', recipe_id: 1},
        {step_number: 2, instructions: 'recipe steps', recipe_id: 1},
        {step_number: 3, instructions: 'will be kept', recipe_id: 1}
      ]);
    });
};
