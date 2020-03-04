// Note: We can tidy and refactor the way that we load records here, and avoid using FS, and the JSON.parse method.
// But this is also an appropriate way of loading the data in :)
const fs = require ('fs');
const data = fs.readFileSync(`${__dirname}/data/records.json`);

const loadRecords = () => {
    try {
       return JSON.parse(data);
    }
    catch (error) {
        console.log(error);
        return []; // We return a sensible default to ensure that the code doesn't crash.
    }
}

const getCatsAndDogs = () => {
    const records = loadRecords();

    if (records.length >= 1){
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    loadRecords,
    getCatsAndDogs
}
