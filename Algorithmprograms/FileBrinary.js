/******************************************************************************
 *  Execution       :   1. default node         cmd> node FileBrinary.js 
 *                      2. if nodemon installed cmd> nodemon FileBrinary.js
 * 
 *  Purpose         : Determines whether the word taken as an input is present in the file or not.
 * 
 *  @description    : The word to be searched is taken as input and searched in the file present.
 * 
 *  @file           : FileBrinary.js
 *  @overview       : BrinarySearch module is to check whether the two strings are anagram or not.
 *  @module         : BrinarySearch
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

function brinarySearch()
{
    read.question("Enter the searched word: ",function(str){
        if(isNaN(str))
        {
            utility.brinarySearch(str);
        }
        else
            {
           console.log("Invalid input");
           process.exit();
            }
    });
}
brinarySearch();