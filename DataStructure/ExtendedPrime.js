var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function extended()
{
    read.question("Enter the minumum range-->",function(min){
        read.question("Enter the maximum range-->",function(max){
            try{
                if(min==" " || max==" ") throw "Enter some integer as a range."
                if(isNaN(min) || isNaN(max)) throw "Enter only integer as range."
                //var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;
                if((min-Math.floor(min))!=0 ||((max-Math.floor(max))!==0)) throw "Enter only integer as a range"
                utility.extended(min,max);
                read.close();
            }
            catch(err){
                console.log(err);
                extended()
            } 
           //read.close()
        });
    });
}
extended();