import { it, expect } from "vitest";
import { findMaximumNumber, onlyEven, sumNumbers } from "./exercice2";

it("Should filter only even numbers", () => {
  expect(onlyEven([1, 3, 5, 7, 9])).toEqual([]);
  expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
});

it("Should find the maximum number", () => {
  expect(findMaximumNumber([1, 3, 5, 7, 9])).toEqual(9);
  expect(findMaximumNumber([-1, -3, -5, -7, -9])).toEqual(-1);
});

it("Should sum the numbers", () => {
  expect(sumNumbers([])).toEqual(0);
  expect(sumNumbers([1, 3, 5, 7, 9])).toEqual(25);
  expect(sumNumbers([-1, -3, -5, -7, -9])).toEqual(-25);
  expect(sumNumbers([-1, 0, -2, 5, 3, 6, 7, 8, -9, -10])).toEqual(7);
});
