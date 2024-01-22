import { it, expect } from "vitest";
import { mergeObjects, updateObjectProperty } from "./exercice4";

it("Should update object property", () => {
  expect(updateObjectProperty({ name: "John" }, "name", "Doe")).toEqual({ name: "Doe" });
  expect(updateObjectProperty({ name: "John" }, "age", 30)).toEqual({ name: "John", age: 30 });
});

it("Should merge two objects", () => {
  expect(mergeObjects({ name: "John" }, { name: "Doe" })).toEqual({ name: "Doe" });
  expect(mergeObjects({ name: "John" }, { age: 30 })).toEqual({ name: "John", age: 30 });
  expect(mergeObjects({ name: "John" }, { name: "Doe", age: 30 })).toEqual({ name: "Doe", age: 30 });
});
