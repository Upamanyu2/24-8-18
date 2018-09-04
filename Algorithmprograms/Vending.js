/******************************************************************************
 *  Execution       :   1. default node         cmd> node Vending.js 
 *                      2. if nodemon installed cmd> nodemon Vending.js
 * 
 *  Purpose         : Converts the amount to the number of notes required for the equivalent amount.
 * 
 *  @description    : It takes amount as input and shows the note and number required for acheiving that amount.
 * 
 *  @file           : Vending.js
 *  @overview       : calculate module is used to calculate the number of notes required for that exact amount.
 *  @module         : calculate
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
function calculate()
{ 
         var mNote=0; 
    read.question("Enter the amount u want: ",function(amount)
    {    
        utility.calculateMinNoNote(amount,mNote);
        read.close();
    });
}
calculate();