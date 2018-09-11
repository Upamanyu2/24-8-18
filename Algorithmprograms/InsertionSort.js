/******************************************************************************
 *  Execution       :   1. default node         cmd> node Guess.js 
 *                      2. if nodemon installed cmd> nodemon Guess.js
 * 
 *  Purpose         : Determines the number thought.
 * 
 *  @description    : A range is taken as an input in command line argument and the number is found in that range.
 * 
 *  @file           : Guess.js
 *  @overview       : Guess module is to find out the number thought by the user.
 *  @module         : Guess
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

var readlineSync = require('readline-sync');
var utility = require('../Algorithmprograms/utility.js');
function insertionSort()
{
    var size=readlineSync.question('Enter the size of the array: ');
    if(isNaN(size)===false && size>1)
    { var arr=[]
        //arr.length=size;
     for(var i=0;i<size;i++)
     {
        var x=readlineSync.question(`Enter the element at position ${i}: `);
        arr.push(x);
     }
     if(isNaN(arr[0])===false)
     var arr1=utility.insertionSort(arr)
     else
     var arr1=utility.insertionSort1(arr)
     console.log("The sorted array:  "+arr1);
    }
    else console.log("Invalid");
}
insertionSort();