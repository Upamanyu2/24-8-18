var readline = require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Harmonic_Number.js 
 *                      
 * 
 *  Purpose         : Determines the sum of a series.
 * 
 *  @description    : It takes the limit as the input and calculates the sum of the series till that limit.
 * 
 *  @file           : Harmonic_Number.js
 *  @overview       : Harmonic_Number module is used to calculate the sum till the limit provided by the user and display the sum of the series.
 *  @module         : Harmonic
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function Harmonic()
{
    read.question("Enter the limit: ", function(H){
      utility.Harmonic(H);
      read.close();  

});
}
Harmonic();
