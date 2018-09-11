/******************************************************************************
 *  Execution       :   1. default node         cmd> node Day.js 
 *                      2. if nodemon installed cmd> nodemon Day.js
 * 
 *  Purpose         : Takes date as input in command line argument and shows the day of that particular date.
 * 
 *  @description    : Takes date as an input in the command line argument and shows the day for the respective date.
 * 
 *  @file           : Day.js
 *  @overview       : dayOfWeek module is used to find out the day of the particular date.
 *  @module         : dayOfWeek
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
var utility = require('../Algorithmprograms/utility.js');






function dayOfWeek()
{
    var d=process.argv[2];
    var m=process.argv[3];
    var y=process.argv[4];
     //if(isNaN(date)===true)
     utility.dayOfWeek(d,m,y); 
     try{
        if (d ==" " || m==" " || y==" ") throw "empty";
        if (isNaN(d) || isNaN(m) || isNaN(y)) throw "not a number";
        d = Number(d);
        m = Number(m);
        y = Number(y);   
    }
    catch(err)
    {
       console.log("Input is "+err);
       
    }
     //else console.log("Invalid input");
             

}
dayOfWeek();