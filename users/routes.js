const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./model.js");

const generateToken = require("../auth/generateToken");

routes.post("/register", async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      let account = req.body;
      account.password = bcrypt.hashSync(account.password, 4);
      const newUser = await Users.insert(account);
      res.status(201).json({ newUser });
    } else
      res.status(400).json({ message: "Please include username and password" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

routes.post("/login", async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      const { username, password } = req.body;
      const user = await Users.findBy({ username }).first();
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ user: user.username, token });
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } else
      res.status(400).json({ message: "Please include username and password" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = routes;
