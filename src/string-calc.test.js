
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

describe('ADD', () => {
    genTest(
        'Should be able to handle empty string and return 0',
        stringCalc.add(""),
        0
    )

    genTest(
        'Should be able to handle one param',
        stringCalc.add('1'),
        1
    )

    genTest(
        'Should be able to handle two params and add them',
        stringCalc.add('1,2'),
        3
    )


  })
