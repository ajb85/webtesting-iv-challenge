const knex = require("knex");
const dev = require("../knexfile.js").development;
export default knex(dev);
