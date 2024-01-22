import { it, expect } from "vitest";
import { countLetter, isPalindrome, reverseString } from "./exercice1";

it("Should reverse the string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

it("Should count the letter", () => {
  expect(countLetter("hello", "l")).toBe(2);
  expect(countLetter("javascript", "z")).toBe(0);
  expect(countLetter("world", "o")).toBe(1);
});

it("Should check if a string is a palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("madam")).toBe(true);
});
