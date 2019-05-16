const stringCalc = {}
const add = (str) => {
    var delimiter
    if (str.search(/\/\/\D\n[0-9]/gm) != -1){
      delimiter = str.charAt(2)
      str = str.replace(/\/\/\D\n/gm, '')
    }
    else { delimiter = ','}

    return  str.replace(/(\r\n|\n|\r)/gm, delimiter).split(delimiter).reduce((acc,next) => acc + Number(next), 0)
 }
stringCalc.add = add


module.exports = stringCalc