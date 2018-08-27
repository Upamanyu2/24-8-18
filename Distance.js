var readline=require('readline');
var utility = require('../Javascript programs/Utility/utility10.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function dist()
{
    read.question("Enter the first distance: ",function(x){
        read.question("Enter the second distance: ", function(y){
            utility.dist(x,y);
            read.close();
        });
    });
}
dist();