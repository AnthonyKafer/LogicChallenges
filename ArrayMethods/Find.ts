const myFind = (func, arr)=>{

    for(let i = 0; i<arr.length; i++){
        
    let check = func(arr[i])
  
    if(check === true){
        return arr[i]
    }
}
}

const arrTest = [10, 4, 20, 50, 2]

console.log(myFind((e)=> e > 15, arrTest))

console.log(arrTest.find((e)=> e > 15))