const fs = require ('fs')
const data = fs.readFileSync('records.json')

const loadRecords = () => {
    try {
       return JSON.parse(data);
    }
    catch(error){
        console.log(error);
        return []  
    }
}

const getCatsAndDogs = () => {
    const records = loadRecords() 
    if (records.length>=1){
        return true
    }
    else {
        return false
    }
}
        
module.exports = {loadRecords, getCatsAndDogs}


