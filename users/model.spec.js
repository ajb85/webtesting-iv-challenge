const db = require("../data/dbConfig.js");
const Users = require("./model.js");

describe("Users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert()", () => {
    it("should insert users with data provided", async () => {
      await Users.insert({ username: "test1", password: "asdf" });
      await Users.insert({ username: "test2", password: "asdf" });
      await Users.insert({ username: "test3", password: "asdf" });

      const users = await db("users");
      expect(users).toHaveLength(3);
    });

    it("should return IDs for animals created", async () => {
      const cat = await Users.insert({ name: "Cat" });
      const dog = await Users.insert({ name: "Dog" });
      const liger = Users.insert({ name: "Liger" });

      expect(cat.body.id).toBe(1);
      expect(dog.body.id).toBe(2);
      expect(liger.body.id).toBe(3);
    });
  });

  describe("remove()", () => {
    it("should remove animals with ids provided", async () => {
      const inserted = await Users.insert({ name: "Cat" });
      const deleted = await Users.remove({ id: inserted.body.id });
      expect(inserted).toHaveLength(3);
    });
  });
});
