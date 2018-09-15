var utility = require('../Object oriented/utility.js');
var readline= require('readline');
//var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function message(){
    read.question("Enter your name: ",function(name){
        read.question("Enter your full name:",function(full_name){
          read.question("Enter your mobile number: ",function(mobile_number){
            utility.message(name,full_name,mobile_number);
            read.close();
            
          });
        });
     }); 
       
}
message();