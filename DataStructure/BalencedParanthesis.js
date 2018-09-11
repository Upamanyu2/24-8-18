var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function stack()
{
    read.question("Enter any expression of your choice---> ",function(exp){
            // try{
            //     if(isNaN(exp)) "Enter only brackets, number or operators"
                utility.stack(exp);
                read.close();
            // }
            // catch(err)
            // {
            //     console.log(err);
            // }
           
        
      }); 
}
stack();