var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Leapyear.js 
 *                      
 * 
 *  Purpose         : Determines whether a given year is leapyear or not.
 * 
 *  @description    : Input is a four digit number as year, and it is displaying whether it is leap year or not. 
 * 
 *  @file           : Leapyear.js
 *  @overview       : Calculate module is to determine the year is a leapyear or not.
 *  @module         : calculate
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function calculate()
{
    read.question("Enter the year: ", function(year){
        utility.calculate(year);
        read.close();

    });
}
calculate();

