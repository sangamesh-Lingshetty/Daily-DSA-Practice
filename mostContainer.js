const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

function Container(height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start <= end) {
    let length = Math.min(height[start], height[end]);
    let width = end - start;
    let area = length * width;
    max = Math.max(max, area);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
}

console.log(Container(height));
