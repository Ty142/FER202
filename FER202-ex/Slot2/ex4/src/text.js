function createIncrementer() {
  let count = 0; // Initialize counter
  return function () {
    return count++; // Increment and return
  };
}

// Usage:
const incrementer = createIncrementer();
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
console.log(incrementer()); //
console.log(incrementer()); //
console.log(incrementer()); //
