const {
  getInitials,
  createSlugLower,
  average,
  createSlug,
  isPalindrome,
} = require("./snacks.js");

//SNACK 1

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
  expect(getInitials("Luigi Verdi")).toBe("LV");
  expect(getInitials("Anna Smith")).toBe("AS");
});

//SNACK 2

test("La funzione createSlugLower restituisce una stringa in lowercase.", () => {
  expect(createSlugLower("Hello World")).toBe("hello world");
  expect(createSlugLower("JavaScript is Awesome")).toBe(
    "javascript is awesome"
  );
});

//SNACK 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([10, 20, 30])).toBe(20);
  expect(average([5, 15, 25, 35])).toBe(20);
});

// SNACK 4

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Hello World")).toBe("hello-world");
  expect(createSlug("JavaScript is Awesome")).toBe("javascript-is-awesome");
});

// SNACK 5

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome("")).toBe(true);
});
