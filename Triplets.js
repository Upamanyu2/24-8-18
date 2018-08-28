var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility15.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function triple()
{
    read.question("Enter the number of elements: ",function(N){
        utility.triple(read,N);
        
    });
}
triple();