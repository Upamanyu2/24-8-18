/******************************************************************************
 *  Execution       :   1. default node         cmd> node Sqrt.js 
 *                      2. if nodemon installed cmd> nodemon Sqrt.js
 * 
 *  Purpose         : Calculates the root of the number inputted.
 * 
 *  @description    : The number is taken as input and its root is displayed as output.
 * 
 *  @file           : Sqrt.js
 *  @overview       : sqrt module is to calculate the root of a number using newton's method.
 *  @module         : sqrt
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
function sqrt()
{
    read.question("Enter the number: ",function(value){
    utility.sqrt(value);
    try{
        if (value =="") throw "empty";
        if (isNaN(value)) throw "Not a number";
        value = Number(value);
    }
    catch(err)
    {
       console.log("Input is "+err);
    }
    read.close();
    });

}
sqrt();