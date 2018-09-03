var readlineSync=require('readline-sync');
var utility = require('../Algorithmprograms/utility.js');
function everything()
{
    var size=readlineSync.question('Enter the size of the array: ');
    var arr=[];
    for(var i=0;i<size;i++)
    {
        var x=readlineSync.question(`Enter the number at position ${i}: `)
        arr.push(x);
    }

}
everything();