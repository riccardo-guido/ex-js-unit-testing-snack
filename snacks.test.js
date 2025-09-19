const { getInitials } = require("./snacks.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
  expect(getInitials("Luigi Verdi")).toBe("LV");
  expect(getInitials("Anna Smith")).toBe("AS");
});
