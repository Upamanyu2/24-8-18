var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility6.js');
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
 
 
