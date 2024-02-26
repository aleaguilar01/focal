const input = process.argv.slice(2);


const reverse = function(original) {
  return original.join().split('').reverse().join('');
};


if (input.length > 0) {
  console.log(reverse(input));
}