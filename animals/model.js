const db = require("../data/dbConfig.js");

module.exports = {
  findUsersBy
};

function findUsersBy(filter) {
  return db("users").where(filter);
}

function getAnimalIDsForUserID(id) {
  return db("user_animals").where({ user_id: id });
}

async function getUsersAnimals(username) {
  const { id } = findUsersBy({ username }).first();
}
