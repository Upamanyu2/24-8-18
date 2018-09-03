var readline= require('readline');
var utility = require('../Algorithmprograms/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function bitsSwap()
{
    read.question("Enter the number to be convert: ", function(val){
    utility.bitsSwap(val);
    read.close();
    });
}
bitsSwap();