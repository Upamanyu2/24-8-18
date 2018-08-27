var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility11.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function calculate()
{
    read.question("Enter the value of a: ",function(a){
        read.question("Enter the value of b: ",function(b){
            read.question("Enter the value of c: ", function(c){
                utility.calculate(a,b,c);
                read.close();
            });
        });
    });
}
calculate();