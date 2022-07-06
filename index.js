function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function testFunction(x) {
  return true;
}

//Spanly (object) -> key values for every input method -> individual function that does the job.

const Spanly = {
  array: (arr, predicate, multipleSequencesCheck = false) => {
    if (multipleSequencesCheck === true) {
      let result = [];
      let previousTrueInstance = 0;

      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
          result.push(arr.slice(previousTrueInstance, i + 1));
          previousTrueInstance = i + 1;
        }
      }

      if (result[0] === undefined) {
        return arr;
      } else {
        if (previousTrueInstance !== arr.length) {
          result.push(arr.slice(previousTrueInstance));
        }
        return result;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) return [arr.slice(0, i + 1), arr.slice(i + 1)];
      }

      return arr;
    }
  },
};

console.log(Spanly.array([3, 3, 3, 2, 3, 2], isEven, true));
