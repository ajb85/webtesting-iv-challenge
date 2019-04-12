const db = require("../data/dbConfig.js");

module.exports = {
  findUsersBy,
  getAnimalListFromUserId,
  getUsersAnimals
};

function findUsersBy(filter) {
  return db("users").where(filter);
}

function getAnimalListFromUserId(id) {
  return db
    .select("a.name as Animal")
    .from("animals as a")
    .join("user_animals as ua", { "ua.animal_id": "a.id", "ua.user_id": id });
}

async function getUsersAnimals(username) {
  const { id } = await findUsersBy({ username }).first();
  return getAnimalListFromUserId(id);
}
