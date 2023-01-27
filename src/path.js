const path = require('path');

console.log(path.sep);

const filePath = path.join('/folder1///', "//folder2/");
console.log(filePath);

const base = path.basename(filePath)
console.log(base);