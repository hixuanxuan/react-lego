const fs = require('fs');
const data = {
    a: 1
};
fs.writeFileSync('./exportData.json', JSON.stringify(data));