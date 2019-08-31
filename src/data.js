import input from './input.csv';

// A silly function which will add number to every input cell
export default function data(number) {
  return input.map(row => Object.values(row).map(value => value + number));
}
