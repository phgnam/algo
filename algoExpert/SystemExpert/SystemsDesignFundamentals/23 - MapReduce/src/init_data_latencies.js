const fs = require('fs');

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of 100 random numbers between 5000 and 15000
const randomNumbers = Array.from({ length: 200 }, () => getRandomNumber(5000, 15000));

// Convert the array to a string with each number on a new line
const fileContent1 = randomNumbers.slice(0, 100).join('\n');

// Write the content to a file
fs.writeFile('./host1/latencies.txt', fileContent1, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File has been written successfully!');
  }
});

// Convert the array to a string with each number on a new line
const fileContent2 = randomNumbers.slice(100).join('\n');

// Write the content to a file
fs.writeFile('./host2/latencies.txt', fileContent2, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File has been written successfully!');
  }
});