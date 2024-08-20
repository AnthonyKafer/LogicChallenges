const mySort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minor = i;

    for (let a = i + 1; a < arr.length; a++) {
      arr[a] < arr[minor] ? minor = a : minor ;
    }

    if (i !== minor) {
      let temp = arr[i]
      arr [i] = arr[minor]
      arr[minor] = temp
    }
  }
  console.log(arr)
};
const arrTest = ['Q', 'M', 'T', 'B', 'X', 'O', 'P', 'L', 'R', 'K', 'F', 'E', 'J', 'S', 'H', 'I', 'A', 'G', 'Y', 'V', 'U', 'N', 'C', 'Z', 'D', 'W'];
// arrTest.sort();
// console.log(arrTest);

mySort(arrTest);
