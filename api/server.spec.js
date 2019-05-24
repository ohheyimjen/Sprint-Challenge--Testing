const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("endpoints", () => {
    describe("GET /games", () => {
      it("should return the list of games and HTTP status code 200", async () => {
        const res = await request(server).get("/games");
        expect(res.status).toBe(200);
      });

      it()
    });
  });
});
