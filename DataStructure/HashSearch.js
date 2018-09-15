var utility=require('../DataStructure/utility.js')
var r1=require('readline')
var prompts=r1.createInterface(process.stdin,process.stdout)

function search()
{
    prompts.question('enter the size of hash table(array)-->',function(len){

        prompts.question('enter the value to be searched-->',function(val){
            if(len<1||val<1||isNaN(len)||isNaN(val)||len==undefined||val==undefined||len==' '||len=='  '||val==' '||val=='  '||len==''||val=='')
            {
                console.log('invalid input!! please give proper array size and number to search')
                process.exit();
            }
            utility.hash_search(val,len);

        });
    });
}
search();