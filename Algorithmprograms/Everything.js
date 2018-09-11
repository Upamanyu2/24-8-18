/******************************************************************************
 *  Execution       :   1. default node         cmd> node Everything.js 
 *                      2. if nodemon installed cmd> nodemon Everything.js
 * 
 *  Purpose         : Determines to sort or search a number or a string array accoding to user choice.
 * 
 *  @description    : It enters a integer array or string array and searches the element or sorts it.
 * 
 *  @file           : Everything.js
 *  @overview       : Everything module is to search something from a string or sort the string.
 *  @module         : everything, bubblesort, bubblesort1, getCurrentTime, getElapsedTime
 *  @author         : Upamanyu Saha
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility = require('../Algorithmprograms/utility.js');
function everything()
{   var a,a1;
    var size=readlineSync.question('Enter the size of the array: ');
    var arr=[];
    //arr.length=size;
    var program=readlineSync.question('You want to search/sort: ');
    var str=readlineSync.question('Enter what you want to search/sort string/number: ');
    for(var i=0;i<size;i++)
    {
        if(str=='number')
        {
            var x=readlineSync.question(`Enter the number at position ${i}: `);
            arr.push(x);
        }
        if(str=='string')
        {
            var x1=readlineSync.question(`Enter the string at position ${i}: `);
            arr.push(x1);
        }
       
    }
    if(program=='search')
    {
       
        var search=readlineSync.question('Enter the search element: ');
        a=utility.getCurrentTime();
        utility.everything(arr,search);
        a1=utility.getCurrentTime();
        utility.getElapsedTime(a,a1);    
    }
    if(program=='sort')
    {
        var x1=readlineSync.question('Enter what sort you want to perform bubblesort/insertionsort: ');
        if(x1=='insertionsort')
        {
            a=utility.getCurrentTime();
            utility.insertionSort(arr);
            console.log("The sorted array is: "+arr);
            a1=utility.getCurrentTime();
            utility.getElapsedTime(a,a1);
        }
        if(x1=='bubblesort')
        {
            if(str=='number')
            {
                a=utility.getCurrentTime();
                utility.bubblesort(arr);
                console.log("The sorted array is: "+arr);
                a1=utility.getCurrentTime();
                utility.getElapsedTime(a,a1);
            }
            if(str=='string')
            {
                a=utility.getCurrentTime();
                utility.bubblesort1(arr);
                console.log("The sorted array is: "+arr);
                a1=utility.getCurrentTime();
                utility.getElapsedTime(a,a1);
            }
        }
        

    }
    else process.exit();


}
everything();
