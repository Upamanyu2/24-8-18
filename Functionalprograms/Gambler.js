var readline= require('readline');
var utility = require('../Functionalprograms/Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Gambler.js 
 *                      
 * 
 *  Purpose         : Determines the times of win and loss and calculates the percentage individually.
 * 
 *  @description    : We are taking the number of games the person wants to play, amount to be invested, amount to be incomed, for output we are providing the percent of loss and the percent of win and calculating the average between the no of wins, no of loss, no of bets.
 * 
 *  @file           : Gambler.js
 *  @overview       : Gambler module to check the time between the two inputs.
 *  @module         : game
 *  @author         : Upamanyu
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
function game()
{
   read.question("Enter the number of games: ", function(N){
        
        read.question("Enter limit of stake while starting to invest: ", function(S){
            
      read.question("Enter your goal: ", function(G){
            utility.game(G,S,N);
            read.close();
   });
  
   });
  
});
}
 game();