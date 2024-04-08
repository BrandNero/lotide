const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0);

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);