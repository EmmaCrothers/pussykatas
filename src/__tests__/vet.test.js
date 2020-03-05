const vet = require('../vet')

describe('vet.js', () => {
    beforeEach(() => {})

    it('can successfully load records', () => {
        const records = vet.loadRecords();
        expect(records).toEqual(expect.any(Array));
        expect(records).toHaveLength(25)
    })

    it('will return all the cats and dogs in the records', () => {
        const result = vet.getCatsAndDogs()
        const expected = [{"animal": {"age": 11, "gender": "female", "name": "Alysa", "type": "Dog"}, "fee": 449, "id": 1, "owner": {"first_name": "Giovanna", "last_name": "Boughey"}}, {"animal": {"age": 24, "gender": "male", "name": "Carl", "type": "Cat"}, "fee": 697, "id": 2, "owner": {"first_name": "Andrew", "last_name": "Carlson"}}, {"animal": {"age": 25, "gender": "female", "name": "Cary", "type": "Cat"}, "fee": 799, "id": 4, "owner": {"first_name": "Maurie", "last_name": "Dunnion"}}, {"animal": {"age": 25, "gender": "male", "name": "Ira", "type": "Cat"}, "fee": 205, "id": 10, "owner": {"first_name": "Ainsley", "last_name": "Bartak"}}, {"animal": {"age": 22, "gender": "female", "name": "Vick", "type": "Dog"}, "fee": 440, "id": 15, "owner": {"first_name": "Thaddus", "last_name": "Wood"}}, {"animal": {"age": 10, "gender": "female", "name": "Chanda", "type": "Dog"}, "fee": 1289, "id": 19, "owner": {"first_name": "Melly", "last_name": "Rockhall"}}]
        expect(result).toHaveLength(6)
        expect(result).toEqual(expected);
    });
})
