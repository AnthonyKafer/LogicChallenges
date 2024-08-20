const myReduce = (arr, func) => {
    let acum = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i]
        let next = arr[i + 1]
        console.log(next)
        acum = func(current, next)
    }
    console.log(acum)
}


const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
// //     initialValue,
// // );

// console.log(sumWithInitial);

myReduce(array1, (a, b) => a + b)