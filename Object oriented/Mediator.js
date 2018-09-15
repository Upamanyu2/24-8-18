var utility = require('../Object oriented/utility.js');
var readlinesync=require('readline-sync');
function stockAccount()
{
   var name=readlinesync.question("Enter the name of the share: ");
   var num=readlinesync.question("Enter the number of shares: ");
   var price=readlinesync.question("Enter the price of each share: ")
   utility.stockAccount(name,num,price);
}
stockAccount();