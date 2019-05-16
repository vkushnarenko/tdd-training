
const stringCalc = require('./string-calc.js')
describe('String calculator', () => {
  it('Should exists', () => {
      expect(stringCalc).toBeTruthy()
  })
})

const genTest = (title, actual, expected) => {
    it(title, () => {
        expect(actual).toEqual(expected)
    })
}

describe('ADD', () => {

    // 1. int Add(string numbers)
    // ———————————————
    // The method can take up to two numbers, separated by commas, and will return their sum. 
    // for example “” or “1” or “1,2” as inputs.
    // (for an empty string it will return 0) 
    // Hints:
    // ——————
    //  - Start with the simplest test case of an empty string and move to one and two numbers
    //  - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
    //  - Remember to refactor after each passing test
    // ———————————————————————————————

    genTest(
        'Should be able to handle empty string an answer should be 0',
        stringCalc.add(""),
        0
    )

    genTest(
        'Should be able to handle one param',
        stringCalc.add('1'),
        1
    )

    genTest(
        'Should be able to handle two params',
        stringCalc.add('1,2'),
        3
    )
   
    // 2. Allow the Add method to handle an unknown amount of numbers

    genTest(
        'Should be able to handle unknown (7) amount of params',
        stringCalc.add('1,2,3,5,6,7'),
        24
    )

    genTest(
        'Should be able to handle unknown (9) amount of params',
        stringCalc.add('1,1,1,1,1,1,1,1,1'),
        9
    )
    // 3. Allow the Add method to handle new lines between numbers (instead of commas).
    // the following input is ok: “1\n2,3” (will equal 6)
    // the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

    genTest(
        'Should be able to handle new lines between numbers (instead of commas)',
        stringCalc.add('1\n2,3'),
        6
    )

    // 4. Support different delimiters
    // to change a delimiter, the beginning of the string will contain a separate line that 
    // looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
    // the first line is optional. all existing scenarios should still be supported

    genTest(
    'Should be able to handle presence of delimiter changer, and apply it instead of coma',
    stringCalc.add('//;\n1;2'),
    3
    )

  })
