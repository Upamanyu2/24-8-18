var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
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