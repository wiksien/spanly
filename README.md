# Spanly

A JavaScript utility library for dividing sequences based on test functions.

## Description

Spanly provides an efficient way to split sequences (arrays, strings, etc.) into multiple parts based on custom test functions. This makes it easy to partition data based on specific conditions while maintaining clean and readable code.

## Usage

javascript:
```
const spanly = require('spanly');

// Example 1: Split numbers into positive and negative groups
const numbers = [1, -2, 3, -4, 5, -6];
const isPositive = num => num > 0;
const [positives, negatives] = spanly.split(numbers, isPositive);
console.log(positives); // [1, 3, 5]
console.log(negatives); // [-2, -4, -6]

// Example 2: Split string by type
const mixed = ['apple', 1, 'banana', 2, 'cherry'];
const isString = item => typeof item === 'string';
const [strings, nonStrings] = spanly.split(mixed, isString);
console.log(strings); // ['apple', 'banana', 'cherry']
console.log(nonStrings); // [1, 2]
```

## Features

- 🚀 Simple and intuitive API
- 💪 Type-agnostic - works with any sequence type
- 🎯 Custom test functions for flexible splitting
- ⚡ Efficient single-pass implementation
- 🔧 Zero dependencies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [wiksien](https://github.com/wiksien)

## Support

If you find any bugs or have feature requests, please [open an issue](https://github.com/wiksien/spanly/issues).
