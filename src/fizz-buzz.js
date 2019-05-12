const fizzBuzz = (num) => {
    const by5 = num % 5 === 0
    const by3 = num % 3 === 0
    buzz = 'Buzz'
    fizz = 'Fizz'
    return by5 && by3
     ? fizz+buzz 
     : by5 
        ? buzz 
        : by3
            ? fizz
            : num
   
}

module.exports = fizzBuzz