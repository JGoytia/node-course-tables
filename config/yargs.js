const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the multiply base'
    })
    .option('f', {
        alias: 'final',
        type: 'number',
        default: 10,
        describe: 'Final number to multiply'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Shows in console the table'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'Base must be a number.';
        } else if(isNaN(argv.f)) {
            throw 'Parameter -f must be a number'
        }
        return true;
    })
    .argv;

module.exports = argv;