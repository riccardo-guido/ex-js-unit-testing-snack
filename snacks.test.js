const { getInitials, createSlug, average } = require("./snacks.js");

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

//SNACK 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([10, 20, 30])).toBe(20);
  expect(average([5, 15, 25, 35])).toBe(20);
});
