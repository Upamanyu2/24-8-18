/******************************************************************************
 *  Execution       :   1. default node         cmd> node Prime.js 
 *                      2. if nodemon installed cmd> nodemon Prime.js
 * 
 *  Purpose         : Determines and prints all the prime numbers between a range.
 * 
 *  @description    : Checks for the prime numbers between a given range and prints them one by one.
 * 
 *  @file           : Prime.js
 *  @overview       : Primechecker module is to check whether there is prime number present in a given range or not and print them.
 *  @module         : Primechecker
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

function primeChecker()
{
    read.question("Enter the minimum limit: ",function(min){
        read.question("Enter the maximum limit: ",function(max){
        utility.primeChecker(min,max);
        process.exit();
        });
    });
}
primeChecker();