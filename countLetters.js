const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const result1 = countLetters("lighthouse");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 2);
assertEqual(result1["t"], 1);
assertEqual(result1["o"], 1);
