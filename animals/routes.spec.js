const request = require("supertest");
const server = require("../server.js");

describe("animal routes", () => {
  it.skip("should return json and 200 OK", async () => {
    const headers = { headers: { Authorization: "string" } };
    const res = await request(server).get("/api/animals", headers);
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(200);
  });

  it.skip("should return 400 without a header", async () => {
    const res = await request(server).get("/api/animals");
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(400);
  });

  it.skip("should return 201 when adding an animal", async () => {
    const headers = { headers: { Authorization: "string" } };
    const res = await request(server).post("/api/animals/add", { name: "Cat" });
    expect(res.type).toBe("application/json");
    expect(res.body.name).toBe("Cat");
    expect(res.status).toBe(201);
  });

  it.skip("should return 204 when removing an animal", async () => {
    const headers = { headers: { Authorization: "string" } };
    const res = await request(server).delete("/api/animals/:id", { id: 3 });
    expect(res.status).toBe(204);
  });
});
