import { add } from "../src/main";

describe("add", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number string", () => {
    expect(add("7")).toBe(7);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("2,5")).toBe(7);
  });

  test("should handle any number of numbers", () => {
    expect(add("2,2,3")).toBe(7);
    expect(add("4,5,7,7")).toBe(23);
  });

  test("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("2\n2\n3")).toBe(7);
    expect(add("1\n2,3\n4")).toBe(10);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n4|5|6")).toBe(15);
    expect(add("//&\n7&8&9")).toBe(24);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("-7")).toThrow("Negatives not allowed: -7");
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("Negatives not allowed: -2, -3");
    expect(() => add("//;\n1;-2;3")).toThrow("Negatives not allowed: -2");
    expect(add("1,2,3")).toBe(6);
  });

  test.todo("should include all negative numbers in the exception message");
});
