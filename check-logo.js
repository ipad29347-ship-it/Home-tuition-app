const fs = require('fs');
const content = fs.readFileSync('public/icons/logo.png');
console.log(content.slice(0, 10));
