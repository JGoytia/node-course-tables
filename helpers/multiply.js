const fs = require('fs');
require('colors');
const saveFile = async (base, final, list) => {
    try {        
        let main = '';
        let output = '';
        for(let i = 1; i <= final; i++) {
            main += `${base} x ${i} = ${base * i}\n`;
            output += `${base} ${'x'.green} ${i} ${'='.magenta} ${base * i}\n`;
        }

        if(list) {
            console.log('==================');
            console.log('    TABLE OF', base);
            console.log('==================');
            console.log(output);
        }

        // fs.writeFile(`table-${base}.txt`, output, (err) => {
        //     if(err) throw err;
        //     console.log(`table-${base}.txt saved`);
        // });
        fs.writeFileSync(`table-${base}.txt`, main);
        
        return `table-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveFile
}