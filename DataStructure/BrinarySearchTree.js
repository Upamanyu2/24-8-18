var readlinesync = require('readline-sync');//importing readline sync 
var utility = require('../DataStructure/utility.js');//importing utility
function BST()
{
    var testCaseCount = 1;

    var testCases=readlinesync.question("Enter the number of Test Cases :");

    if(testCases>=1 && testCases<=1000) 
            {
                while(testCaseCount<=testCases) 
                {
                    console.log("Test Case "+testCaseCount);
                    // console.log("Enter the number of nodes in binary search tree : ");
                    var nodes = readlinesync.question("Enter the number of nodes :")
                    
                    if(nodes<=1000 && nodes>=1)
                    {
                        var binaryTrees = utility.binarySearchTrees(parseInt(nodes));
                        console.log("The number of different binary search trees that can be created using "+nodes+" nodes are : "+binaryTrees);
                        testCaseCount++;
                    }
                    else 
                    {
                        console.log("Enter the nodes value between 0 to 1000");
                    }
                }
            }
            else 
            {
                console.log("Enter the value of Test Cases between 0 and 1000");
            }
            
            
        }
BST();