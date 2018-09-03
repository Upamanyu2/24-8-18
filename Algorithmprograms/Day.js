var utility = require('../Algorithmprograms/utility.js');

 var d=process.argv[2];
 var m=process.argv[3];
 var y=process.argv[4];





function dayOfWeek()
{
    
     //if(isNaN(date)===true)
     utility.dayOfWeek(m,d,y);
     //else console.log("Invalid input");
             

}
dayOfWeek();