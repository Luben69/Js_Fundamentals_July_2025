function condenseArray(arr) {
  while (arr.length > 1) {
    let condensed = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = condensed;
  }
  return arr[0];
}