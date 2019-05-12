
const fizzBuzz = require('./fizz-buzz')

describe('FizzBuzz', ()=> {
    it('function exists', ()=> {
      expect(fizzBuzz).toBeTruthy()
    })
    it('when param is divided by 3, it should be Fizz', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
        expect(fizzBuzz(6)).toEqual('Fizz')
    })
    it('when param is divided 5, it should be Buzz', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
        expect(fizzBuzz(25)).toEqual('Buzz')
    })
    it('when param is divided 3 and 5, it should be FizzBuzz', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
        expect(fizzBuzz(30)).toEqual('FizzBuzz')
    })
    it('in other cases should return number itself', () => {
        expect(fizzBuzz(2)).toEqual(2)
        expect(fizzBuzz(4)).toEqual(4)
    })
})