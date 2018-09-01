/******************************************************************************
 *  Execution       :   1. default node         cmd> node AnagPalin.js 
 *                      2. if nodemon installed cmd> nodemon AnagPalin.js
 * 
 *  Purpose         : Determines whether the prime numbers between a range is anagram or palindrome.
 * 
 *  @description    : One limit is taken and it shows the number between the range given as input.
 * 
 *  @file           : AnagPalin.js
 *  @overview       : palinAnag module is to find the numbers which are anagram and palindrome within a range.
 *  @module         : palinAnag
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

var readline= require('readline');
var utility = require('../Algorithmprograms/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function palinAnag()
{
    read.question("Enter the minimum limit: ",function(num){
    
        utility.palinAnag(num);
        process.exit();
    });
    
}
palinAnag();