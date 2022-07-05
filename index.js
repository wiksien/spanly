function test(testInput) {
  return true;
}

const Spanly = {
  string: function (input, predicate, multipleSequencesCheck = false) {
    console.log(input, predicate(input), multipleSequencesCheck);
  },
};

Spanly.string("meow", test);
