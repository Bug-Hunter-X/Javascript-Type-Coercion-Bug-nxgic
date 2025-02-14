function foo(a,b){
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return "Invalid Input: Arguments must be numbers";
  }
  return a+b;
}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //5
console.log(foo("2",3)); //5
console.log(foo("a",3)); //Invalid Input: Arguments must be numbers