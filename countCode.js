function countCode(str) {
    const regex = /code/ig;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Example usage
const exampleString = "This is a code snippet. Here's more code.";
const count = countCode(exampleString);
console.log("Count of 'code':", count);  // Output: Count of 'code': 2
