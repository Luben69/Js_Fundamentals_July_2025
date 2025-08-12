function extractNonDecreasing(arr) {
  let currentMax = -Infinity;

  let filtered_arr = arr.filter(num => {
    if (num >= currentMax) {
        currentMax = num;
        return true;
    }
    
  }
);
  return filtered_arr.join(' ');
}