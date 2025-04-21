function findSmallestInt(arr) {
  //your code here
  // return Math.min(...arr)
  return arr.sort((a,b) => {return a-b})[0];
}
