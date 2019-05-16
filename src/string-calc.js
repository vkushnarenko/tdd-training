const stringCalc = {}
const add = (str) => {
    var delimiter
    if (str.search(/\/\/\D\n[0-9]/gm) != -1){
      delimiter = str.charAt(2)
      str = str.replace(/\/\/\D\n/gm, '')
    }
    else { delimiter = ','}
    
    var arrayOfNumbers = str.replace(/(\r\n|\n|\r)/gm, delimiter).split(delimiter) 
    var negativeArr = arrayOfNumbers.filter((number) => number < 0 )

    if (negativeArr.length > 0) {
     throw new Error("negatives not allowed -1,-4" + negativeArr.join())
    }

  return  arrayOfNumbers.reduce((acc,next) => acc + Number(next), 0)
 }

 stringCalc.add = add

module.exports = stringCalc