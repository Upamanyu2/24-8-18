var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function ordered()
{
    read.question("Enter the number to search-->",function(str1){
        try{
            if(isNaN(str1)) throw "Enter only number"
            if(str1==" ") throw "Input is empty"
            if(str1 == "") throw "Empty";
            utility.ordered(str1);
        }
        catch(err){
            console.log(err);
            ordered()
        }
        
    });
     


}
ordered()