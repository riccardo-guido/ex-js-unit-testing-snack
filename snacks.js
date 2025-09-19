function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function createSlugLower(text) {
  return text.toLowerCase();
}

function average(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function createSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}
function isPalindrome(str) {
  const word = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

module.exports = {
  getInitials,
  createSlugLower,
  average,
  createSlug,
  isPalindrome,
};
