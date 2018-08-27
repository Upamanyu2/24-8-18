var readline= require('readline');
var utility = require('../Javascript programs/Utility/utility7.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
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