const vet = require('./vet')

describe('vet', () => {
    it ('provides data for all the cats and dogs', () => {
    expect (vet.getCatsAndDogs()).toEqual(true)
    })
})
