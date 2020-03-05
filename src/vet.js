// Note: We can tidy and refactor the way that we load records here, and avoid using FS, and the JSON.parse method.
// But this is also an appropriate way of loading the data in :)
const data = require ('./data/records.json')

const loadRecords = () => {
  return data
}

const getCatsAndDogs = () => {
    const records = loadRecords();
       return records.filter((record) =>  {
            return record.animal.type==='Dog'|| record.animal.type==='Cat'           
        })
    }

const getMoreExoticAnimals = () => {
        const records = loadRecords();
        const filteredAnimals = records.filter((record) => {
            return record.animal.type!=='Dog' && record.animal.type!=='Cat'})
            return filteredAnimals                        
    }

module.exports = {
    loadRecords,
    getCatsAndDogs,
    getMoreExoticAnimals
}
