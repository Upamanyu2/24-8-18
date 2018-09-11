/******************************************************************************
 *  Execution       :   1. default node         cmd> node BrinaryCOnversion.js 
 *                      2. if nodemon installed cmd> nodemon BrinaryConversion.js
 * 
 *  Purpose         : Converts the decimal to brinary number.
 * 
 *  @description    : Decimal number is given as an input and its brinary equivalent is shown in the form of array.
 * 
 *  @file           : BrinaryConversion.js
 *  @overview       : toBrinary module is used to convert decimal number to brinary number.
 *  @module         : toBrinary.
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
function toBrinary()
{
    read.question("Enter the decimal number: ",function(num){
      utility.toBrinary(num);
      try{
        if (num ==" ") throw "empty"; 
        if (isNaN(num)) throw "not a number";
        num = Number(num);
    }
    catch(err)
    {
       console.log("Input is "+err);
    }
       read.close();
    });

}
toBrinary()