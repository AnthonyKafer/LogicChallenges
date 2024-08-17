const mySplice = (arr, index, end, ...values) => {

    let newArr = arr
    

    for (let i = 0; i < values.length; i++) {
        newArr[index + i] = values[i]
        
        if(end !== 0) newArr.length --
        end --
        
    }
    

    console.log(newArr)
}

const arrTest = [1, 2, 3, 4, 5]

// arrTest.splice(2, 0, "teste")
// console.log(arrTest)

mySplice(arrTest, 2, 0, "teste 2")