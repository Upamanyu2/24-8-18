var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Triplets.js 
 *                      
 * 
 *  Purpose         : Determines the input and prints the set for which the sum of individual numbers is coming to zero.
 * 
 *  @description    : The input from the user is taken in the array and then the inputs in the array is checked with condition to display the triplet pair in a set. 
 * 
 *  @file           : Triplets.js
 *  @overview       : Triplets module is to check the individual numbers from a set of three is summing to zero or not having distinct values.
 *  @module         : findTriplets
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function findTriplets()
{
    read.question("Enter the number of elements: ",function( N){
        utility.findTriplets(read,N);
        
    });
}
findTriplets();