const { saveFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

console.clear()

console.log(argv);

// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

saveFile(argv.b, argv.f, argv.l)
    .then(fileName => console.log(fileName.rainbow, 'saved'))
    .catch(err => console.log(err));