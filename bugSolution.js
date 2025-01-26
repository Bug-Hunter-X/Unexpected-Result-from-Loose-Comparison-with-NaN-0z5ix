function foo(x) {
  if (isNaN(x)) {
    return NaN; // Handle NaN explicitly
  } else if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else {
    return 1; 
  }
}

console.log(foo(NaN)); // Correctly returns NaN
console.log(foo(null)); // Correctly returns 0
console.log(foo(-1));  // Correctly returns -1
console.log(foo(1));   // Correctly returns 1