/******************************************************************************
 *  Execution       :   1. default node         cmd> node Nibble.js 
 *                      2. if nodemon installed cmd> nodemon Nibble.js
 * 
 *  Purpose         : Swaps the nibble and displays the number and checks it is a power of 2 or not.
 * 
 *  @description    : It takes a decimal input converts it into brinary and swaps the nibble and checks whether it is a power of two or not.
 * 
 *  @file           : Nibble.js
 *  @overview       : BitSwap module is to swap the nibble and find out the number whether it is a power of two or not.
 *  @module         : bitSwap
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
function bitsSwap()
{
    read.question("Enter the number to be convert: ", function(val){
    utility.bitsSwap(val);
    read.close();
    });
}
bitsSwap();