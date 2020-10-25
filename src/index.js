let units = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

let dozens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

let wholeDozens = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

let result;

module.exports = function toReadable(num) {
    let numArray = Array.from(String(num), Number);
    for (let i = 0; i < numArray.length; i++) {
      if (numArray.length === 1) {
        result = units[numArray[0]];
      } else if (numArray.length === 2) {
        if (numArray[0] === 1) {
          result = dozens[numArray[1]];
        } else {
          if (numArray[1] !== 0) {
            
          result = `${wholeDozens[numArray[0]]} ${units[numArray[1]]}`;
          } else {
            result = wholeDozens[numArray[0]];
            }
        }
      } else if (numArray.length === 3) {
        if (numArray[1] === 0 && numArray[2] === 0) { //900
          result = `${units[numArray[0]]} hundred`;
        } else if (numArray[1] === 0 && numArray[2] !== 0) { //909
        result = `${units[numArray[0]]} hundred ${units[numArray[2]]}`;
  
        } else if (numArray[1] === 1) { //919
          result = `${units[numArray[0]]} hundred ${dozens[numArray[2]]}`;
        } else if (numArray[1] !== 0 && numArray[2] === 0) { //990
        result = `${units[numArray[0]]} hundred ${wholeDozens[numArray[1]]}`;
        } else {
          result = `${units[numArray[0]]} hundred ${wholeDozens[numArray[1]]} ${units[numArray[2]]}`;
        }
      }
    }
    return result;
};
