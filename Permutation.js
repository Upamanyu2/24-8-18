var readline=require('readline');
var utility = require('../Javascript programs/Utility/utility13.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function input()
{   
    read.question("Enter the string : ",function(n){
        
            utility.input(n);
            read.close();
        
         });
    
}
input();
