var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility9.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
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