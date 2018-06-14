const fs = require('fs');
const {promisify} = require('util');
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

(async() => {
    const svg = await read('./icons.svg');
    write('./icons.js', `module.exports = \`${svg.toString()}\`;`);
})();
