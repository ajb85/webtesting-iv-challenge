const db = require("../data/dbConfig.js");
const Animals = require("./model.js");

describe("Animals model", () => {
  beforeEach(async () => {
    await db("animals").truncate();
  });

  describe("insert()", () => {
    it("should insert animals with data provided", async () => {
      await Animals.insert({ name: "Cat" });
      await Animals.insert({ name: "Dog" });
      await Animals.insert({ name: "Tiger" });

      const animals = await db("animals");
      expect(animals).toHaveLength(3);
    });

    it("should return IDs for animals created", async () => {
      const cat = await Animals.insert({ name: "Cat" });
      const dog = await Animals.insert({ name: "Dog" });
      const liger = Animals.insert({ name: "Liger" });

      expect(cat.body.id).toBe(1);
      expect(dog.body.id).toBe(2);
      expect(liger.body.id).toBe(3);
    });
  });
  describe("remove()", () => {
    it("should remove animals with ids provided", async () => {
      const inserted = await Animals.insert({ name: "Cat" });
      const deleted = await Animals.remove({ id: inserted.body.id });
      expect(inserted).toHaveLength(3);
    });
  });
});
