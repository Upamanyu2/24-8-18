var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility8.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function coupon()
{
    read.question("Enter the minimum limit: ", function(min){
        read.question("Enter the maximum limit: ",function(max){
        utility.coupon(min, max);
        read.close();
        });
    });
}
coupon();