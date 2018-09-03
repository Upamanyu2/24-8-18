var readline= require('readline');
var utility = require('../Algorithmprograms/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function calculate()
{ 
         var mNote=0; 
    read.question("Enter the amount u want: ",function(amount)
    {    
        utility.calculateMinNoNote(amount,mNote);
        read.close();
    });
}
calculate();