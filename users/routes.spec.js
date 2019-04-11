describe("user routes", () => {
  it("should respond with 401 created & json on /api/users/register", async () => {
    const res = await request(server).post("/api/users/register", {
      username: "salt",
      password: "asdf"
    });
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(401);
  });

  it("should respond with 200 OK & json+token on api/users/login", async () => {
    const res = await request(server).post("/api/users/login", {
      username: "sam",
      password: "asdf"
    });
    expect(res.type).toBe("application/json");
    expect(res.body.token).toBeDefined();
    expect(res.status).toBe(200);
  });

  it("should respond with 404 on api/users/login bad login", async () => {
    const res = await request(server).post("/api/users/login", {
      username: "sam",
      password: "badLogin"
    });
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(404);
  });

  it("should respond with 400 on incomplete data", async () => {
    const res = await request(server).post("/api/users/login", {
      username: "badLogin"
    });
    expect(res.type).toBe("application/json");
    expect(res.status).toBe(400);
  });
});

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
