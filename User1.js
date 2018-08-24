var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility2.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function username()
{
    read.question("Enter the user name:  ", function(userinput){
    utility.username(userinput);
    read.close();
});
}
username();