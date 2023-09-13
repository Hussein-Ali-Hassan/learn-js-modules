// module / library: math.js

// named export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// default export (only one per module)
function multiply(a, b) {
  return a * b;
}

export { add, subtract };

export default multiply;
