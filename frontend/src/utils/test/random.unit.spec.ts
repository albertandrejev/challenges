import { randomString } from "./random";

describe("randomString", () => {
  it("should create 10 characters length random alphanumeric string", async () => {
    expect(randomString(10)).toMatch(/^[a-z0-9]{10}$/);
  });
});
