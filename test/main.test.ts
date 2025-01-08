import { add } from "../src/main";

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number string", () => {
    expect(add("7")).toBe(7);
  });

  test.todo(
    "should return the sum of two numbers for a string with two numbers"
  );
  test.todo("should handle any number of numbers");
  test.todo("should handle new lines as delimiters");
  test.todo("should support custom delimiters");
  test.todo("should throw an exception for negative numbers");
  test.todo("should include all negative numbers in the exception message");
});
