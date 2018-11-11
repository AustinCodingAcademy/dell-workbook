// Using your knowledge of loops and conditionals, write a program that prints out the numers 1 to 100 following these specifications:
// 'Fizz' if the number is divisible by only three
// 'Buzz' if the number is divisible by only five
// 'FizzBuzz' if the number is divisible by three and five
// the number itself if it is none of these

for (i = 1; i <= 100; i++)
{
  if (i % ( 3 * 5) === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}