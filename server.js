const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// import routes

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// setup routes

module.exports = server;
