const request = require("supertest");
const server = require("../server.js");
const db = require("../data/dbConfig.js");

describe("user routes", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("/register", () => {
    it("should respond with 201 created & json on /api/users/register", async () => {
      const res = await request(server)
        .post("/api/users/register")
        .send({ username: "salt1234", password: "pass" });
      expect(res.type).toBe("application/json");
      expect(res.status).toBe(201);
    });
  });

  describe("/login", () => {
    beforeEach(async () => {
      await request(server)
        .post("/api/users/register")
        .send({ username: "salt1234", password: "pass" });
    });

    it("should respond with 200 OK & json+token on api/users/login", async () => {
      const login = await request(server)
        .post("/api/users/login")
        .send({
          username: "salt1234",
          password: "pass"
        });
      expect(login.type).toBe("application/json");
      expect(login.body.token).toBeDefined();
      expect(login.status).toBe(200);
    });

    it("should respond with 404 on api/users/login bad login", async () => {
      const res = await request(server)
        .post("/api/users/login")
        .send({
          username: "sam",
          password: "badLogin"
        });
      expect(res.type).toBe("application/json");
      expect(res.status).toBe(400);
    });

    it("should respond with 400 on incomplete data", async () => {
      const res = await request(server).post("/api/users/login", {
        username: "badLogin"
      });
      expect(res.type).toBe("application/json");
      expect(res.status).toBe(400);
    });
  });
});
