var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function palindrome()
{
    read.question("Enter the string--> ", function(string){
       utility.palindrome(string);
        read.close();
    });
}
palindrome();