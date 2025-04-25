var number = function(busStops){
  // Good Luck!
  return busStops.map((a) => {return a[0] - a[1]}).reduce((sum, num) => { return sum + num},0)
}
