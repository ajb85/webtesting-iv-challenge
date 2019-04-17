const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    { id: 1, username: "sam", password: bcrypt.hashSync("asdf", 4) },
    { id: 2, username: "frodo", password: bcrypt.hashSync("asdf", 4) },
    { id: 3, username: "gandalf", password: bcrypt.hashSync("asdf", 4) }
  ]);
};
