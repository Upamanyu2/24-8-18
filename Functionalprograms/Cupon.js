var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Cupon.js 
 *                      
 * 
 *  Purpose         : Determines the distinct cupons and the total number of cupons generated using random function from lodash module.
 * 
 *  @description    : It is used to generate the random numbers between two limit min and max and then it is displaying the distinct cupons generated and total cupons generated and their respective numbers.
 * 
 *  @file           : Cupon.js
 *  @overview       : Cupon module is to generate random cupons and then find out the distinct cupons from them.
 *  @module         : cupon and loadash module
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function coupon()
{
    read.question("Enter the number of cupons to be generated: ", function(n){
        
        utility.coupon(n);
        read.close();
        
    });
}
coupon();