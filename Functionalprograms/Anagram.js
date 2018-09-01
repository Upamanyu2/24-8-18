var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function anagram()
{
    read.question("Enter the string1 : ",function(x){
        read.question("Enter string2 :  ",function(y){
             utility.anagram(x,y);
             read.close();
        });

    });
}
anagram();