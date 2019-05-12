const stringCalc = {}
const add = (str) => {
   return  str.split(',').reduce((acc,next) => acc + Number(next), 0)
 }
stringCalc.add = add


module.exports = stringCalc