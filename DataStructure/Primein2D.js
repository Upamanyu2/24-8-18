var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function prime2D()
{
    read.question("Enter the minimum range-->",function(min){
        read.question("Enter the maximum range-->",function(max){
            utility.prime2D(min,max);
            read.close();
        })
       
    });   
}
prime2D();
