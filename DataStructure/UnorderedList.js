var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function unordered()
{
  read.question("Enter the string to find-->  ",function(str){
    try{
        if(str==" ") throw "Invalid input"
        if(isNaN(str)==false) throw "Enter only a string"
        utility.unordered(str);
        read.close();
    }  
    catch(err)
    {
        console.log(err);
        unordered()
    }
   
      
  });
}
unordered();

