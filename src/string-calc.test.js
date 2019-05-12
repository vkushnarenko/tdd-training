
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
    genTest(
        'test gen',
        stringCalc.add('1,2'),
        3
    )

    it('Should add two numbers separated by coma', () => {
        const actual = stringCalc.add('1,2')
        const expected = 3
        expect(actual).toEqual(expected)
    })
    it('Should add two numbers separated by coma', () => {
        const actual = stringCalc.add('3,4')
        const expected = 7
        expect(actual).toEqual(expected)
    })
  })

 // test + realization 1 commit
 //https://osherove.com/tdd-kata-1
 //https://github.com/sseletskyy-apixio/tdd-training