//var utility = require('../DataStructure/utility.js');
var readline= require('readline');
var utility = require('../DataStructure/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function anagramStack(){

    read.question("Enter the minimum range: ", function(min){
        read.question("Enter the maximum range: ", function(max){
            try{
                if(min==" " || max==" ") throw "Enter some integer as a range."
                if(isNaN(min) || isNaN(max)) throw "Enter only integer as range."
                //var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;
                if((min-Math.floor(min))!=0 ||((max-Math.floor(max))!==0)) throw "Enter only integer as a range"
                var a1 = utility.primeCheck(min,max);
                var a2 =  utility.anagramPrimeCheck(a1);
                var arr =  utility.anagramStack(a2);
                read.close();
            }
            catch(err){
                console.log(err);
                anagramStack();
            } 
            // read.close();
        });
    });  
}
anagramStack();