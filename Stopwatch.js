var readline=require('readline');
var utility = require('../Javascript programs/Utility/utility14.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
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
            });
        }
    });
}
time();