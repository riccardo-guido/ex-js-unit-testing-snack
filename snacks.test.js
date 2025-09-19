const { getInitials, createSlug } = require("./snacks.js");

//SNACK 1

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
  expect(getInitials("Luigi Verdi")).toBe("LV");
  expect(getInitials("Anna Smith")).toBe("AS");
});

//SNACK 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Hello World")).toBe("hello-world");
  expect(createSlug("JavaScript is Awesome")).toBe("javascript-is-awesome");
  expect(createSlug("Unit Testing Rocks")).toBe("unit-testing-rocks");
});
