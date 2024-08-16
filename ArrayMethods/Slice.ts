const mySlice = (arr, start, end) => {
  let slicedArr = [];

  if (!start) slicedArr = arr;

  if (start) {
    let c = 0;
    for (let i = 0; i < arr.length - start; i++) {
      slicedArr[i] = arr[start + c];
      c++;
    }
  }

  if (start && end) {
    let c = 0;
    for (let i = 0; i < arr.length - start; i++) {
      slicedArr[i] = arr[start + c];

      c++;
      slicedArr.length--;
    }
    slicedArr.length--;
  }
  console.log(slicedArr);
};

const arrTest = ["ant", "bison", "camel", "duck", "elephant"];

mySlice(arrTest, 1, 2);
