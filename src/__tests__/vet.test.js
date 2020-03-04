const vet = require('../vet')

describe('vet.js', () => {
    beforeEach(() => {})

    it('can successfully load records', () => {
        const records = vet.loadRecords();
        expect(records).toEqual(expect.any(Array));
        expect(records).toHaveLength(25)
    })

    it('will return all the cats and dogs in the records', () => {
        // This is a stub. We will want to return a list of all the cats and dogs,
        // rather than the boolean value below
        expect(vet.getCatsAndDogs()).toEqual(true);
    });
})
