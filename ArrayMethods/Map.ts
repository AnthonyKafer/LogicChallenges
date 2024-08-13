const myMap = (func, arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[newArr.length++] = func(arr[i]);
  
}

  return newArr;
};

const originArray = [10, 20, 30, 40, 50];

console.log(myMap((e) => e + 1, originArray));

console.log(originArray.map((e) => e + 1));
