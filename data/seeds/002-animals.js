exports.seed = function(knex) {
  return knex("animals").insert([
    { id: 1, name: "Tiger" },
    { id: 2, name: "Elephant" },
    { id: 3, name: "Dog" }
  ]);
};
