var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function factor()
{
    read.question("Enter the number: ", function(number){
        utility.factor(number);
        read.close();
    });
}
factor();
 
 
