import { it, expect } from "vitest";
import { createCounter } from "./exercice3";

it("Should create a counter closure", () => {
  const counter = createCounter();
  expect(counter()).toEqual(0);
  expect(counter()).toEqual(1);
  expect(counter()).toEqual(2);

  const counter2 = createCounter();
  expect(counter2()).toEqual(0);
});
