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

    it('will return more exotic animals, which are all animals except cats and dogs', () => {
        const result = vet.getMoreExoticAnimals()
        const expected = 
        [
            {
              id: 3,
              fee: 964,
              owner: { first_name: 'Portia', last_name: 'Bailles' },
              animal: { age: 22, name: 'Fayre', type: 'Bat', gender: 'female' }
            },
            {
              id: 5,
              fee: 534,
              owner: { first_name: 'Kelsey', last_name: 'Elgie' },
              animal: { age: 17, name: 'Joelie', type: 'Bear', gender: 'female' }
            },
            {
              id: 6,
              fee: 1310,
              owner: { first_name: 'Astra', last_name: 'Ghelerdini' },
              animal: { age: 18, name: 'Towney', type: 'Iguana', gender: 'male' }
            },
            {
              id: 7,
              fee: 1255,
              owner: { first_name: 'Philomena', last_name: 'Gretton' },
              animal: { age: 8, name: 'Nissy', type: 'Elephant', gender: 'male' }
            },
            {
              id: 8,
              fee: 470,
              owner: { first_name: 'Brandy', last_name: 'Fownes' },
              animal: { age: 23, name: 'Jaynell', type: 'Pheasant', gender: 'female' }
            },
            {
              id: 9,
              fee: 654,
              owner: { first_name: 'Sabine', last_name: 'Balham' },
              animal: { age: 15, name: 'Issy', type: 'Bandicoot', gender: 'female' }
            },
            {
              id: 11,
              fee: 1328,
              owner: { first_name: 'Margeaux', last_name: 'Ladd' },
              animal: { age: 23, name: 'Wendy', type: 'Ocelot', gender: 'female' }
            },
            {
              id: 12,
              fee: 559,
              owner: { first_name: 'Desmond', last_name: 'Twelvetree' },
              animal: { age: 12, name: 'Jacobo', type: 'Fox', gender: 'female' }
            },
            {
              id: 13,
              fee: 239,
              owner: { first_name: 'Maribel', last_name: 'Kluger' },
              animal: { age: 8, name: 'Mirabel', type: 'Tiger', gender: 'male' }
            },
            {
              id: 14,
              fee: 324,
              owner: { first_name: 'Andra', last_name: 'Reame' },
              animal: { age: 6, name: 'Munmro', type: 'Cow', gender: 'female' }
            },
            {
              id: 16,
              fee: 1344,
              owner: { first_name: 'Marja', last_name: 'Sydes' },
              animal: { age: 19, name: 'Ludwig', type: 'Ox', gender: 'male' }
            },
            {
              id: 17,
              fee: 665,
              owner: { first_name: 'Karalee', last_name: 'Rosita' },
              animal: { age: 15, name: 'Ariel', type: 'Mermaid', gender: 'female' }
            },
            {
              id: 18,
              fee: 1956,
              owner: { first_name: 'Korry', last_name: 'Sutch' },
              animal: { age: 20, name: 'Nonie', type: 'Egret', gender: 'unknown' }
            },
            {
              id: 20,
              fee: 1409,
              owner: { first_name: 'Jasmina', last_name: 'Cossem' },
              animal: { age: 3, name: 'Barnebas', type: 'Heron', gender: 'male' }
            },
            {
              id: 21,
              fee: 119,
              owner: { first_name: 'Constantin', last_name: 'Border' },
              animal: { age: 1, name: 'Cord', type: 'Jaguar', gender: 'male' }
            },
            {
              id: 22,
              fee: 436,
              owner: { first_name: 'Elsbeth', last_name: 'Cottier' },
              animal: { age: 24, name: 'Ailyn', type: 'Gull', gender: 'female' }
            },
            {
              id: 23,
              fee: 1978,
              owner: { first_name: 'Lorens', last_name: 'Winyard' },
              animal: { age: 5, name: 'Noelle', type: 'Rattlesnake', gender: 'unknown' }
            },
            {
              id: 24,
              fee: 1911,
              owner: { first_name: 'Shayne', last_name: 'Marrable' },
              animal: { age: 2, name: 'Katleen', type: 'Alligator', gender: 'female' }
            },
            {
              id: 25,
              fee: 699,
              owner: { first_name: 'Reuben', last_name: 'Maunder' },
              animal: { age: 4, name: 'Lora', type: 'Warthog', gender: 'unknown' }
            }
          ]
        expect(result).toHaveLength(19)
        expect(result).toEqual(expected);
    })

    it('will return all the male and female animals in the records', () => {
        const result = vet.getMaleAndFemale()
        const expected = 
        [
            {
              id: 1,
              fee: 449,
              owner: { first_name: 'Giovanna', last_name: 'Boughey' },
              animal: { age: 11, name: 'Alysa', type: 'Dog', gender: 'female' }
            },
            {
              id: 2,
              fee: 697,
              owner: { first_name: 'Andrew', last_name: 'Carlson' },
              animal: { age: 24, name: 'Carl', type: 'Cat', gender: 'male' }
            },
            {
              id: 3,
              fee: 964,
              owner: { first_name: 'Portia', last_name: 'Bailles' },
              animal: { age: 22, name: 'Fayre', type: 'Bat', gender: 'female' }
            },
            {
              id: 4,
              fee: 799,
              owner: { first_name: 'Maurie', last_name: 'Dunnion' },
              animal: { age: 25, name: 'Cary', type: 'Cat', gender: 'female' }
            },
            {
              id: 5,
              fee: 534,
              owner: { first_name: 'Kelsey', last_name: 'Elgie' },
              animal: { age: 17, name: 'Joelie', type: 'Bear', gender: 'female' }
            },
            {
              id: 6,
              fee: 1310,
              owner: { first_name: 'Astra', last_name: 'Ghelerdini' },
              animal: { age: 18, name: 'Towney', type: 'Iguana', gender: 'male' }
            },
            {
              id: 7,
              fee: 1255,
              owner: { first_name: 'Philomena', last_name: 'Gretton' },
              animal: { age: 8, name: 'Nissy', type: 'Elephant', gender: 'male' }
            },
            {
              id: 8,
              fee: 470,
              owner: { first_name: 'Brandy', last_name: 'Fownes' },
              animal: { age: 23, name: 'Jaynell', type: 'Pheasant', gender: 'female' }
            },
            {
              id: 9,
              fee: 654,
              owner: { first_name: 'Sabine', last_name: 'Balham' },
              animal: { age: 15, name: 'Issy', type: 'Bandicoot', gender: 'female' }
            },
            {
              id: 10,
              fee: 205,
              owner: { first_name: 'Ainsley', last_name: 'Bartak' },
              animal: { age: 25, name: 'Ira', type: 'Cat', gender: 'male' }
            },
            {
              id: 11,
              fee: 1328,
              owner: { first_name: 'Margeaux', last_name: 'Ladd' },
              animal: { age: 23, name: 'Wendy', type: 'Ocelot', gender: 'female' }
            },
            {
              id: 12,
              fee: 559,
              owner: { first_name: 'Desmond', last_name: 'Twelvetree' },
              animal: { age: 12, name: 'Jacobo', type: 'Fox', gender: 'female' }
            },
            {
              id: 13,
              fee: 239,
              owner: { first_name: 'Maribel', last_name: 'Kluger' },
              animal: { age: 8, name: 'Mirabel', type: 'Tiger', gender: 'male' }
            },
            {
              id: 14,
              fee: 324,
              owner: { first_name: 'Andra', last_name: 'Reame' },
              animal: { age: 6, name: 'Munmro', type: 'Cow', gender: 'female' }
            },
            {
              id: 15,
              fee: 440,
              owner: { first_name: 'Thaddus', last_name: 'Wood' },
              animal: { age: 22, name: 'Vick', type: 'Dog', gender: 'female' }
            },
            {
              id: 16,
              fee: 1344,
              owner: { first_name: 'Marja', last_name: 'Sydes' },
              animal: { age: 19, name: 'Ludwig', type: 'Ox', gender: 'male' }
            },
            {
              id: 17,
              fee: 665,
              owner: { first_name: 'Karalee', last_name: 'Rosita' },
              animal: { age: 15, name: 'Ariel', type: 'Mermaid', gender: 'female' }
            },
            {
              id: 19,
              fee: 1289,
              owner: { first_name: 'Melly', last_name: 'Rockhall' },
              animal: { age: 10, name: 'Chanda', type: 'Dog', gender: 'female' }
            },
            {
              id: 20,
              fee: 1409,
              owner: { first_name: 'Jasmina', last_name: 'Cossem' },
              animal: { age: 3, name: 'Barnebas', type: 'Heron', gender: 'male' }
            },
            {
              id: 21,
              fee: 119,
              owner: { first_name: 'Constantin', last_name: 'Border' },
              animal: { age: 1, name: 'Cord', type: 'Jaguar', gender: 'male' }
            },
            {
              id: 22,
              fee: 436,
              owner: { first_name: 'Elsbeth', last_name: 'Cottier' },
              animal: { age: 24, name: 'Ailyn', type: 'Gull', gender: 'female' }
            },
            {
              id: 24,
              fee: 1911,
              owner: { first_name: 'Shayne', last_name: 'Marrable' },
              animal: { age: 2, name: 'Katleen', type: 'Alligator', gender: 'female' }
            }
          ]
        expect(result).toHaveLength(22)
        expect(result).toEqual(expected);
    });
    it('will return all the animals younger than 5, and all the animals older than 15, as they may require special attention', () => {
        const result = vet.getSpecialAttention()
        const expected = [
            {
              id: 2,
              fee: 697,
              owner: { first_name: 'Andrew', last_name: 'Carlson' },
              animal: { age: 24, name: 'Carl', type: 'Cat', gender: 'male' }
            },
            {
              id: 3,
              fee: 964,
              owner: { first_name: 'Portia', last_name: 'Bailles' },
              animal: { age: 22, name: 'Fayre', type: 'Bat', gender: 'female' }
            },
            {
              id: 4,
              fee: 799,
              owner: { first_name: 'Maurie', last_name: 'Dunnion' },
              animal: { age: 25, name: 'Cary', type: 'Cat', gender: 'female' }
            },
            {
              id: 5,
              fee: 534,
              owner: { first_name: 'Kelsey', last_name: 'Elgie' },
              animal: { age: 17, name: 'Joelie', type: 'Bear', gender: 'female' }
            },
            {
              id: 6,
              fee: 1310,
              owner: { first_name: 'Astra', last_name: 'Ghelerdini' },
              animal: { age: 18, name: 'Towney', type: 'Iguana', gender: 'male' }
            },
            {
              id: 8,
              fee: 470,
              owner: { first_name: 'Brandy', last_name: 'Fownes' },
              animal: { age: 23, name: 'Jaynell', type: 'Pheasant', gender: 'female' }
            },
            {
              id: 9,
              fee: 654,
              owner: { first_name: 'Sabine', last_name: 'Balham' },
              animal: { age: 15, name: 'Issy', type: 'Bandicoot', gender: 'female' }
            },
            {
              id: 10,
              fee: 205,
              owner: { first_name: 'Ainsley', last_name: 'Bartak' },
              animal: { age: 25, name: 'Ira', type: 'Cat', gender: 'male' }
            },
            {
              id: 11,
              fee: 1328,
              owner: { first_name: 'Margeaux', last_name: 'Ladd' },
              animal: { age: 23, name: 'Wendy', type: 'Ocelot', gender: 'female' }
            },
            {
              id: 15,
              fee: 440,
              owner: { first_name: 'Thaddus', last_name: 'Wood' },
              animal: { age: 22, name: 'Vick', type: 'Dog', gender: 'female' }
            },
            {
              id: 16,
              fee: 1344,
              owner: { first_name: 'Marja', last_name: 'Sydes' },
              animal: { age: 19, name: 'Ludwig', type: 'Ox', gender: 'male' }
            },
            {
              id: 17,
              fee: 665,
              owner: { first_name: 'Karalee', last_name: 'Rosita' },
              animal: { age: 15, name: 'Ariel', type: 'Mermaid', gender: 'female' }
            },
            {
              id: 18,
              fee: 1956,
              owner: { first_name: 'Korry', last_name: 'Sutch' },
              animal: { age: 20, name: 'Nonie', type: 'Egret', gender: 'unknown' }
            },
            {
              id: 20,
              fee: 1409,
              owner: { first_name: 'Jasmina', last_name: 'Cossem' },
              animal: { age: 3, name: 'Barnebas', type: 'Heron', gender: 'male' }
            },
            {
              id: 21,
              fee: 119,
              owner: { first_name: 'Constantin', last_name: 'Border' },
              animal: { age: 1, name: 'Cord', type: 'Jaguar', gender: 'male' }
            },
            {
              id: 22,
              fee: 436,
              owner: { first_name: 'Elsbeth', last_name: 'Cottier' },
              animal: { age: 24, name: 'Ailyn', type: 'Gull', gender: 'female' }
            },
            {
              id: 23,
              fee: 1978,
              owner: { first_name: 'Lorens', last_name: 'Winyard' },
              animal: { age: 5, name: 'Noelle', type: 'Rattlesnake', gender: 'unknown' }
            },
            {
              id: 24,
              fee: 1911,
              owner: { first_name: 'Shayne', last_name: 'Marrable' },
              animal: { age: 2, name: 'Katleen', type: 'Alligator', gender: 'female' }
            },
            {
              id: 25,
              fee: 699,
              owner: { first_name: 'Reuben', last_name: 'Maunder' },
              animal: { age: 4, name: 'Lora', type: 'Warthog', gender: 'unknown' }
            }
          ]
        expect(result).toHaveLength(19)
        expect(result).toEqual(expected);
    });
    it('will return all the animal names and owner last names in the records', () => {
      const result = vet.callOwner()
      const expected =     [
        'Alysa, Boughey',   'Carl, Carlson',
        'Fayre, Bailles',   'Cary, Dunnion',
        'Joelie, Elgie',    'Towney, Ghelerdini',
        'Nissy, Gretton',   'Jaynell, Fownes',
        'Issy, Balham',     'Ira, Bartak',
        'Wendy, Ladd',      'Jacobo, Twelvetree',
        'Mirabel, Kluger',  'Munmro, Reame',
        'Vick, Wood',       'Ludwig, Sydes',
        'Ariel, Rosita',    'Nonie, Sutch',
        'Chanda, Rockhall', 'Barnebas, Cossem',
        'Cord, Border',     'Ailyn, Cottier',
        'Noelle, Winyard',  'Katleen, Marrable',
        'Lora, Maunder'
      ]
      expect(result).toHaveLength(25)
      expect(result).toEqual(expected);
  });
  it('will return all the owner names in the records', () => {
    const result = vet.listOwner()
    const expected =     [
      'Giovanna Boughey',  'Andrew Carlson',
      'Portia Bailles',    'Maurie Dunnion',
      'Kelsey Elgie',      'Astra Ghelerdini',
      'Philomena Gretton', 'Brandy Fownes',
      'Sabine Balham',     'Ainsley Bartak',
      'Margeaux Ladd',     'Desmond Twelvetree',
      'Maribel Kluger',    'Andra Reame',
      'Thaddus Wood',      'Marja Sydes',
      'Karalee Rosita',    'Korry Sutch',
      'Melly Rockhall',    'Jasmina Cossem',
      'Constantin Border', 'Elsbeth Cottier',
      'Lorens Winyard',    'Shayne Marrable',
      'Reuben Maunder'

    ]
    expect(result).toHaveLength(25)
    expect(result).toEqual(expected);
});
})
