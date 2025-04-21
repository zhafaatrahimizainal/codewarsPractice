function oddOrEven(array) {
   //enter code here
  return array.reduce((sum, num) => (sum+num),0) % 2 ? 'odd' : 'even'
}
