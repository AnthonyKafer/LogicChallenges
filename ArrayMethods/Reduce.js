const myReduce = (func, arr, initialValue) => {
  let acum;
  if (!initialValue) initialValue = arr[0]

  if (initialValue) {
    acum = func(initialValue, arr[0]);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    acum = func(acum, arr[i + 1]);
  }

  arr = acum;
  console.log(arr);
};

const arrTest = [1, 2, 3, 4];
myReduce((a, b) => a * b, arrTest, 5);
