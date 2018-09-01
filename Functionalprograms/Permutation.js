var readline=require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Permutation.js 
 *                      2. if nodemon installed cmd> nodemon Permutation.js
 * 
 *  Purpose         : Determines the factors of a number is prime or not and those are displayed in output.
 * 
 *  @description    
 * 
 *  @file           : Permutation.js
 *  @overview       : Input module is to find out the prime factors of a number and display it.
 *  @module         : input.
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function input()
{   
    read.question("Enter the string : ",function(n){
        
            utility.input(n);
            read.close();
        
         });
    
}
input();
