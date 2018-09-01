/******************************************************************************
 *  Execution       :   1. default node         cmd> node BubbleSort.js 
 *                      2. if nodemon installed cmd> nodemon BubbleSort.js
 * 
 *  Purpose         : Sorts the number inputted by the user.
 * 
 *  @description    : Total number of inputs are taken and then the inputs are taken in the form of number it sorts the input in ascending order.
 * 
 *  @file           : BubbleSort.js
 *  @overview       : BubbleSort module is to sort a module and print the sorted output.
 *  @module         : BubbleSort.
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

var readlineSync=require('readline-sync');
var utility=require('../Algorithmprograms/utility.js');
function bubbleSort()
{
    var size=readlineSync.question('Enter the size of the array: ');
    if(isNaN(size)===false && size>1)
    {  var arr=[]
        for(var i=0;i<size;i++)
        {
         var x=readlineSync.question(`Enter value at position ${i}: `);
         if(isNaN(x)===false)
         arr.push(x);
         else {
               console.log("Invalid input");
               break;
              }
        }
        utility.bubbleSort(arr);
        console.log("The sorted array: "+arr);
    }
    else console.log("Invalid input");
}
bubbleSort();