function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}


function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


function compareArrays( arr1, arr2 ) {
  let i = arr1.length;
  if (i != arr2.length) return false;
  while (i--) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


// const sum = (a, b) => a + b

// function memorize(fn, limit) {
//     return function(...args) {

//       console.log('А вот тут аргументы: ', args )
//       return fn(args[0], args[1])
//     }
// }
// const mSum = memorize(sum, 5);
// mSum(3, 4);


function memorize(fn, limit) {
  const memory = [];
  return function (...args) {
    memory.push({
      args: args,
      result: fn (...args)
    });
    if (limit > 10) { memory.shift(); }
    console.log(memory);
    //if ( memory.find(compareArrays) ) {result = }
    return fn(args);
    }
}