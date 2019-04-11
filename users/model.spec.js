const db = require("../data/dbConfig.js");
const Users = require("./model.js");

describe("Users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert()", () => {
    it.skip("should insert users with data provided", async () => {
      await Users.insert({ username: "test1", password: "asdf" });
      await Users.insert({ username: "test2", password: "asdf" });
      await Users.insert({ username: "test3", password: "asdf" });

      const users = await db("users");
      expect(users).toHaveLength(3);
    });
  });
});
