/******************************************************************************
 *  Execution       :   1. default node         cmd> node Anagram.js 
 *                      2. if nodemon installed cmd> nodemon Anagram.js
 * 
 *  Purpose         : Determines whether two strings are anagram or not.
 * 
 *  @description    : Two strings are only taken as input and then it is displayed whether they are anagram or not.
 * 
 *  @file           : Anagram.js
 *  @overview       : Anagram module is to check whether the two strings are anagram or not.
 *  @module         : Anagram
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

function anagram()
{
    read.question("Enter the string1 : ",function(x){
        read.question("Enter string2 :  ",function(y){
             utility.anagram(x,y);
             try{
                if (x ==" " || y==" ") throw "empty";
                if (isNaN(x)==false || isNaN(y)==false) throw "not a string";
                
            }
            catch(err)
            {
               console.log("Input is "+err);
            }
             read.close();
        });

    });
}
anagram();