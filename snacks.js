function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function createSlug(text) {
  return text
    .toLowerCase() // tutto minuscolo
    .trim() // rimuove spazi iniziali/finali
    .replace(/\s+/g, "-") // sostituisce spazi con trattini
    .replace(/[^\w\-]+/g, "") // rimuove caratteri non alfanumerici
    .replace(/\-\-+/g, "-"); // evita trattini multipli consecutivi
}

function average(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

module.exports = { getInitials, createSlug, average };
