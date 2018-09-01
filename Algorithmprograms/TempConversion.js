/******************************************************************************
 *  Execution       :   1. default node         cmd> node TempConversion.js 
 *                      2. if nodemon installed cmd> nodemon TempConversion.js
 * 
 *  Purpose         : Converts the temperature from fahrenheit to celsius and celsius to fahrenheit.
 * 
 *  @description    : Temperature is given as a number input and scale is set according to the caharacter input.
 * 
 *  @file           : TempConversion.js
 *  @overview       : Conversion module is used to convert one temperature to another temperature.
 *  @module         : conversion
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
function conversion()
{
    read.question("Enter the temperature: ",function(temp){
        read.question("Enter the temperature scale(F/C): ",function(value){
         utility.coversion(temp,value);
         read.close();
        });
    });
}
conversion();