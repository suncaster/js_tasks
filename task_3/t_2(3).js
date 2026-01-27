function getSumOfNumbers(number, type = "odd") {
    let sum = 0;
    
    for (let i = 0; i <= number; i++) {
        if (type === "" || 
            (type === "odd" && i % 2 !== 0) || 
            (type === "even" && i % 2 === 0)) {
            sum += i;
        }
    }
    
    return sum;
}

console.log(getSumOfNumbers(10, "odd"));   // 25
console.log(getSumOfNumbers(10, "even"));  // 30
console.log(getSumOfNumbers(10, ""));      // 55