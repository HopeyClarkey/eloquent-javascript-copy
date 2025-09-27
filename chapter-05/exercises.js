// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//declare flatten function that takes in an array
  let flattened = array.reduce((flat, current) => flat.concat(current), []);
//reduce the array by declaring flat as the accumulator, current as the loop 
// iteration, and then concat flat and current in an empty array
  return flattened;
//return the new array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
//declare a loop function that takes in 4 params, a start value, a test function,
//an update function, and a body function.
  for (let value = start; test(value); value = update(value)){
//each loop, it should run test function on current loop value, and stop if that
//returns false. It should then:
    body(value);
// call the body function, giving it the current value, and finally call the 
//update function to create a new value and start over from the beginning
  }
}

//??//??//??//??//??//??

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
//declare function that takes in an array and a predicate test?????
  for (let element of array){
//declare 'element' as current iteration of array through for/of
    if(!test(element)) return false; //??why can we do if this way???
//if the element does not pass the test, return false(as can quit looping);
  } //close for loop
return true;
//return true if all pass
}

function every2(array, test){
//declare every2, which takes in an array and a test
  return !array.some(element => !test(element));
//return !the opposite? of array, with .some((tests if 1 element in array passes))
//                define element as iteration, opposite the test on the element?
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
//declare a function called dominantDirection that takes in a text as a param
  let counted = countBy(text, char =>{
//declare counted to be countBy called on text, with element char declared, inside
//the countby function
  let script = characterScript(char.codePointAt(0));
  
  return script ? script.direction : "none" ;
  }).filter(({name}) => name != "none");
  if (counted.length == 0) return 'ltr';

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};