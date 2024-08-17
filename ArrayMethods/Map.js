const myMap = (arr, func) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i], i, arr);

}

  return newArr;
};

const originArray = [10, 20, 30, 40, 50];

console.log(myMap(originArray, (e) => e + 1));

console.log(originArray.map((e) => e + 1));
