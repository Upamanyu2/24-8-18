var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function username()
{
    read.question("Enter the username: ", function(userinput){
      utility.username(userinput);
      read.close();  

    });
    

}
username();
module.exports={
    username : function(userinput)
    {
        if(userinput.length>=3)
        console.log("Hello "+ userinput+"! How are you");
        else
        console.log("Enter atleast 3 characters");
    }
}