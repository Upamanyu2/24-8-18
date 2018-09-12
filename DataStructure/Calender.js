var utility = require('../DataStructure/utility.js');
var month=process.argv[2];
var year=process.argv[3];
function calender()
{
    try{
        
        if(process.argv[2]>12) throw "Enter within 1-12 for month";
        if(month == "" || year=="") throw "Empty";
        if(isNaN(month) || isNaN(year)) throw "Enter only number";
        if(month==" "||year==" ") throw "Input is empty";
        utility.calender(month,year);
    }
    catch(err){
        console.log(err);
    }
    
}
calender();