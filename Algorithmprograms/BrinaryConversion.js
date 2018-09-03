var readline= require('readline');
var utility = require('../Algorithmprograms/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function toBrinary()
{
    read.question("Enter the decimal number: ",function(num){
      utility.toBrinary(num);
       read.close();
    });

}
toBrinary()