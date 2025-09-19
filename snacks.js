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

module.exports = { getInitials, createSlug };
