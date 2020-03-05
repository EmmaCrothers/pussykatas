// Note: We can tidy and refactor the way that we load records here, and avoid using FS, and the JSON.parse method.
// But this is also an appropriate way of loading the data in :)
const data = require ('./data/records.json')

const loadRecords = () => {
  return data
}

const getCatsAndDogs = () => {
    const records = loadRecords();

    if (records.length >= 1){
        return records.filter((record) =>  {
            return record.animal.type==='Dog'|| record.animal.type==='Cat'
        })
    }
    else {
        return []
    }
}

module.exports = {
    loadRecords,
    getCatsAndDogs
}
