function isTriangle(a,b,c)
{
  let array = [a,b,c].sort((a,b)=>{return a-b})
  return array[2] < array[0]+array[1];
}
