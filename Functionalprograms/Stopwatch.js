var readline=require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Stopwatch.js 
 *                      
 * 
 *  Purpose         : Determines the elapsed time between the start and the end input.
 * 
 *  @description    : For starting the stopwatch we are providing 1 as input and for stopping the stopwatch we are providing 0 as input, and the program is displaying the elapsed time between the two. 
 * 
 *  @file           : Stopwatch.js
 *  @overview       : Stopwatch module to check the time between the two inputs.
 *  @module         : getCurrentTime and getElapsedTime
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function time()
{
            read.question("Enter 1 to start ",(start)=>{
                if (start==1)
        {
                startTime=utility.getCurrentTime();
                
                read.question("Enter 0 to end ",(stopTime)=>{
                var stopTime=utility.getCurrentTime();
                var result=utility.getElapsedTime(startTime,stopTime);
                console.log("Elasped time: "+ result+" seconds");
                process.exit();
            });
        }
    });
}
time();