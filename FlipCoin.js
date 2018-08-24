var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility3.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function Random()
{
    read.question("Enter the number of times to flip the coin: ", function(t){
    utility.Random(t);
    read.close();
    })
}
Random();