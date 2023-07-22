// Remove DuPLICATES FM an array
obj1 = [{a: 1}, {b:2}, {c:2}]    
arr1 = [1, 1, 2];

//BEST SOLUTION -- SET - works also for Objects
const unique = (arr) => {
  return [...new Set(arr)];
};
console.log(unique(arr1));
console.log(unique(obj1)); //not like this


//solutions that dont work with OBJECTS, but do with ARRAYS
//filter
const filteredArr = arr1.filter((val, i, arr) => arr.indexOf(val) == i);
console.log(filteredArr);

//forEach

const uniq = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};
console.log(uniq(arr1));
console.log(uniq(obj1));

//reduce
const reducedArr = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.includes(val) ? acc : [...acc, val];
  }, []);
};
//empty array as a default arg
console.log(reducedArr(arr1));


