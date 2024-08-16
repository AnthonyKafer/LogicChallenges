const myReverse = (arr) => {
  if(typeof(arr) === "number"){
    arr = arr + ""
  }  
  let reversed = [];
  reversed.length = arr.length;

  let e = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[e] = arr[i];
    e++;
  }
  arr = reversed;
  console.log(arr);
};

const arrTest = ["Primeiro", "Segundo", "Terceiro", "Quarto"];
const stringTest = "José"
const numberTest = 1000

myReverse(arrTest);
myReverse(stringTest)
myReverse(numberTest)

