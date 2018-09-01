/******************************************************************************
 *  Execution       :   1. default node         cmd> node Guess.js 
 *                      2. if nodemon installed cmd> nodemon Guess.js
 * 
 *  Purpose         : Determines the number thought.
 * 
 *  @description    : A range is taken as an input in command line argument and the number is found in that range.
 * 
 *  @file           : Guess.js
 *  @overview       : Guess module is to find out the number thought by the user.
 *  @module         : Guess
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

var num=process.argv[2];
var utility = require('../Algorithmprograms/utility.js')
function guess()
{
    console.log("Follow the instructions given")
    utility.guess(num);
}
guess();