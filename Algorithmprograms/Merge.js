/******************************************************************************
 *  Execution       :   1. default node         cmd> node Merge.js 
 *                      2. if nodemon installed cmd> nodemon Merge.js
 * 
 *  Purpose         : Sorts the number inputted by the user.
 * 
 *  @description    : Total number of inputs are taken and then the inputs are taken in the form of number it sorts the input in ascending order.
 * 
 *  @file           : Merge.js
 *  @overview       : MergeSort module is to sort a module and print the sorted output.
 *  @module         : MergeSort.
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
readline = require('readline-sync');
var util = require('../Algorithmprograms/utility.js')
function mergesort()
{
    var size= readline.question("enter the size of the array :");
    if(isNaN(size)===false && size>1)
       { var array=[];
        for(i=0;i<size;i++)
        {
         var a=readline.question(`enter the ${(i)} value-> `) 
        
          array.push(a)   
         }
        util.mergesort(array);
        console.log("the sorted array:["+util.mergesort(array)+"]");
       } 
       else console.log("invalid");
   
}
mergesort();