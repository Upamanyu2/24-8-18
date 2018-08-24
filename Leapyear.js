var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function calculate()
{
    read.question("Enter the year: ", function(year){
        utility.calculate(year);
        read.close();

    });
}
calculate();

