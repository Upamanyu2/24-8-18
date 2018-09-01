var readline=require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Distance.js 
 *                      
 * 
 *  Purpose         : Determines the elucidian distance between two points.
 * 
 *  @description    : Two inputs are taken from the user and the distance from the origin is calculated using the formula for elucidian distance calculation. 
 * 
 *  @file           : Distance.js
 *  @overview       : Distance module is to check the distance from a point given by user in the form of coordinates to origin.
 *  @module         : dist
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function dist()
{
    read.question("Enter the first distance: ",function(x){
        read.question("Enter the second distance: ", function(y){
            utility.dist(x,y);
            read.close();
        });
    });
}
dist();