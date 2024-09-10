// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

// **answer :::- (use for loop)**


const colors = ["red", "blue", "green", "yellow", "orange"];
console.log(colors);

const rev_colors = [];

for (let i = 0; i < colors.length; i++) {
  const colors2 = colors[i];
  rev_colors.unshift(colors2);
}
console.log(rev_colors);