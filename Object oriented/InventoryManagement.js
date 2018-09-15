var utility = require('../Object oriented/utility.js');
var readlinesync=require('readline-sync');

function inventory1()
{
   var num=readlinesync.question("Enter the number of stocks: ");
   utility.inventory1(num);
}
inventory1();