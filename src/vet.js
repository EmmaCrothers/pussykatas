// Note: We can tidy and refactor the way that we load records here, and avoid using FS, and the JSON.parse method.
// But this is also an appropriate way of loading the data in :)
const data = require ('./data/records.json')

const loadRecords = () => {
  return data
}

const getCatsAndDogs = () => {
    const records = loadRecords()
    return records.filter((record) =>  {
        const domesticPets = record.animal.type==='Dog'|| record.animal.type==='Cat'  
        return domesticPets         
    })
}

const getMoreExoticAnimals = () => {
    const records = loadRecords()
    const filteredAnimals = records.filter((record) => {
        return record.animal.type!=='Dog' && record.animal.type!=='Cat'
    })
    return filteredAnimals                        
}

const getMaleAndFemale = () => {
    const records = loadRecords()
    const animalGenders= records.filter((record) => {
        return record.animal.gender==='male' || record.animal.gender==='female'
    })
    return animalGenders
}

const getSpecialAttention = () => {
    const records = loadRecords()
    const animalAges= records.filter((record) => {
        return record.animal.age<= '5'||record.animal.age>='15'
    })
    return animalAges

}

const callOwner = () => {
    const records = loadRecords() 
    const animalName = records.map((record) => {
        return record.animal.name + ',' + ' ' + record.owner.last_name
        })
    return animalName
}

const listOwner = () => {
    const records = loadRecords() 
    const ownerName = records.map((record) => {
        return record.owner.first_name + ' ' + record.owner.last_name
        })
    return ownerName
}

const catsAndDogsFees = () => {
    const catAndDogRecords = getCatsAndDogs()
    const petFees = catAndDogRecords.map((record) => {
        return record.fee
        })
        const reducer = (accumulator, currentValue) => accumulator + currentValue
    return petFees.reduce(reducer) 
}

module.exports = {
    loadRecords,
    getCatsAndDogs,
    getMoreExoticAnimals,
    getMaleAndFemale,
    getSpecialAttention,
    callOwner, 
    listOwner,
    catsAndDogsFees,
}
