process.stdin.setEncoding('utf-8');

var version = process.versions.node,
    language = process.env;
    
if (language.hasOwnProperty('lang')) {
    language = language.lang.substr(3, 2);
} else {
    language = 'Not defined';
}

console.log(`\nNode version: ${version}\nSystem language: ${language}\n`);

// ------------------------------------------------------------------------

process.stdin.on('readable', () => {

    var input = process.stdin.read();

    switch(input){
        case null: {
            break;
        }
        default: {
            var instruction = input.toString().trim();
            switch (instruction){
                case '/exit':
                    process.stdout.write('Quitting app!\n\n');
                    process.exit()
                default:
                    process.stderr.write('\nWrong instruction!\n\n');
            }
        }
    };
            process.stdout.write('Enter instruction >>> ');
});



// ------------------------------------------------------------------------

/*
process.stdin.on('readable', () => {
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
        process.stdout.write('Quitting app!\n\n');
        process.exit();
        } else {
            process.stderr.write(`\nWrong instruction!\n\n`);
        }
    } 
    process.stdout.write('Enter instruction >>> ');
});
*/