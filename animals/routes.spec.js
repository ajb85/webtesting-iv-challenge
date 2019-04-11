const request = require("supertest");
const server = require("../server.js");

describe("animal routes", () => {
  it("should return json and 200 OK", async () => {
    const headers = { headers: { Authorization: "string" } };
    const res = await request(server).get("/api/animals", headers);
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(200);
  });

  it("should return 400 without a header", async () => {
    const res = await request(server).get("/api/animals");
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(400);
  });
});
