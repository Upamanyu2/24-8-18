var readline = require('readline');
var utility = require('../Javascript programs/Utility/utility5.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function Harmonic()
{
    read.question("Enter the limit: ", function(H){
      utility.Harmonic(H);
      read.close();  

});
}
Harmonic();
