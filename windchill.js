var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility12.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function windchill1()
{
    read.question("Enter the value of t: ", function(t){
        read.question("Enter the value of v:", function(v){
            utility.windchill1(t,v);
            read.close();
        });
        });
       
    
}
windchill1();