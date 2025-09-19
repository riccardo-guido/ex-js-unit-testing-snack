const {
  getInitials,
  createSlugLower,
  average,
  createSlug,
  isPalindrome,
  findPostById,
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
  //   expect(createSlug("Hello World")).toBe("hello-world");
  //   expect(createSlug("JavaScript is Awesome")).toBe("javascript-is-awesome");
});

// SNACK 5

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome("")).toBe(true);
});

// SNACK 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlug("")).toThrow(
    "Titolo non valido: deve essere una stringa non vuota."
  );
  expect(() => createSlug(123)).toThrow(
    "Titolo non valido: deve essere una stringa non vuota."
  );
});

// SNACK 7

const posts = [
  {
    id: 1,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript",
  },
  { id: 2, title: "Come usare React", slug: "come-usare-react" },
  { id: 3, title: "Node.js per principianti", slug: "nodejs-per-principianti" },
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id.", () => {
  expect(findPostById(posts, 1)).toEqual({
    id: 1,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript",
  });
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Come usare React",
    slug: "come-usare-react",
  });
  expect(findPostById(posts, 4)).toBeNull();
});
