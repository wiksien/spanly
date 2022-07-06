// TEST FUNCTIONS
function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function testFunction(x) {
  return true;
}

/*
  Spanley has a dedicated function for every type of input data that
  the user wishes to span. I could make one function that dynamically 
  checks what type of data it recived, but that decreases both 
  readability of code (if you use Spanly.array() then you know that
  array is being spaned) and slightly decreases the speed of Spanly,
  since every time he has to check the type of input he recives.
  So I decided to separate functions for each data type.
*/

// SPANLY OBJECT
const Spanly = {
  array: (arr, predicate, multipleSequencesCheck = false) => {
    if (multipleSequencesCheck === true) {
      let result = [];
      let previousTrueInstance = 0;

      for (let index = 0; index < arr.length; index++) {
        if (predicate(arr[index])) {
          result.push(arr.slice(previousTrueInstance, index + 1));
          previousTrueInstance = index + 1;
        }
      }

      if (result[0] === undefined) {
        return arr;
      } else {
        /*
          Previously, this code always pushed ending sequence to the result.

          But there was a bug, where if last element of array passed predicate function
          then ending sequence would be pushed in the for loop part so here the push to the result
          went like this: result.push(arr.slice(indexOutOfBounds)); -> result.push([]);

          This if statment checks if previousTrueInstance is out of bounds of the array,
          fixing the bug.
        */
        if (previousTrueInstance !== arr.length) {
          result.push(arr.slice(previousTrueInstance));
        }
        return result;
      }
    } else {
      for (let index = 0; index < arr.length; index++) {
        if (predicate(arr[index]))
          return [arr.slice(0, index + 1), arr.slice(index + 1)];
      }

      return arr;
    }
  },
};

// QUICK STANLY TESTS (Will do more automated ones in ./tests)
console.log(Spanly.array([3, 3, 3, 2, 3, 2], isEven, true));
