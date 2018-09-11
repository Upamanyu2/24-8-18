var read = require('readline-sync');
var utility = require('../DataStructure/utility.js');

function queue()
{
    try{
        var number=read.question('Enter the number of maximum person in queue: ');
        if(isNaN(number)) throw "Enter number only"
        utility.queue(number);
    }
    catch(err){
        console.log(err);
        queue()
    }
    
}
queue();