/******************************************************************************
 *  Execution       :   1. default node         cmd> node MonthlyPayment.js 
 *                      2. if nodemon installed cmd> nodemon MonthlyPayment.js
 * 
 *  Purpose         : Calculates the monythly interest to pay according to the user input.
 * 
 *  @description    : The principle rate and year is taken as input and the interest is calculated and displayed as monthly payment
 * 
 *  @file           : MOnthlyPayment.js
 *  @overview       : MonthlyPayment module is used to calculate the payment.
 *  @module         : monthlyPayment
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
var readline= require('readline');
var utility = require('../Algorithmprograms/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function monthlyPayment()
{
    read.question("Enter the principle amount: ",function(P){
     read.question("Enter the number of year: ", function(Y){
      read.question("Enter the rate percent: ",function(R){
         utility.monthlyPayment(P,Y,R);
         read.close();
      });
     });
    });

}
monthlyPayment();