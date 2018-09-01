var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 2DArray.js 
 *                      
 * 
 *  Purpose         : Determines the output in the form of 2-D Array.
 * 
 *  @description    : Takes the input from the user and displays the output in the form of 2-D Array. 
 * 
 *  @file           : 2DArray.js
 *  @overview       : 2DArray module is to accept the input from the user in the form of array and displaying the input in the form of 2-D Array.
 *  @module         : display
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function display()
{
    read.question("Enter the number of cols:",function(r){
        read.question("Enter the number of rows: ", function(c){
           
                 utility.display(read,c,r);
                // read.close();
                
            });
           
        });
    
}
display();