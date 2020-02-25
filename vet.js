const fs = require ('fs')
const data = fs.readFileSync('records.json');
const vetData = JSON.parse(data);
console.log(vetData);