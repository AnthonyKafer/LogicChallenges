const myFibonacci = (x) => {
    let n2 = x 
    let n1 = x

    if(x <= 0) return  
    console.log(x)
    
    x =  n1-1 + n2 - 2
    myFibonacci(x - 1)

};
myFibonacci(5)