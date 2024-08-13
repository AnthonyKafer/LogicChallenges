const myMap = function received<T>(arr: T[], func:(item: T, index: number, arr: T[])=> unknown ) {
  const newArr: ReturnType<typeof func>[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i], i, arr);

}

  return newArr;
};

const originArray = [10, 20, 30, 40, 50];

console.log(myMap(originArray, (e) => e + 1));

console.log(originArray.map((e) => e + 1));
