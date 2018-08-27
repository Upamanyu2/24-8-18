var readline=require('readline');
var utility = require('../Javascript programs/Utility/utility13.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function check()
{   var arr=new Array();
    read.question("Enter the string: ",function(s){
        
            utility.check(s,arr);
            read.close();
        
         });
    
}
check();