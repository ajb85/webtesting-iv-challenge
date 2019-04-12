const routes = require("express").Router();

const restrict = require("../auth/restrict.js");
const Animals = require("./model.js");

routes.get("/", restrict, async (req, res) => {
  const { username } = req.decoded;
  const animals = await Animals.getUsersAnimals(username);
  res.status(200).json(animals);
});

module.exports = routes;
