var utility = require('../Object oriented/utility.js');
var readlinesync=require('readline-sync');

function stockCalculation()
{
   var n=readlinesync.question("Enter the number of stocks: ");
   utility.stockCalculation(n);
}
stockCalculation();