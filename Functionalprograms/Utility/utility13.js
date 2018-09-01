var input = function(n)
{
   var alpha=[]
   var alpha=n.split('');
   permute(alpha,0,alpha.length-1)
}

var swap = function(alpha, index1, index2)   //swapping
{
    var temp=alpha[index1];
    alpha[index1]=alpha[index2];
    alpha[index2]=temp;   
    return alpha;

}


var permute = function(alpha, startindex, endindex)
{ 
    if(startindex===endindex)
    {
        console.log(alpha.join(''));
    }  
    else{
        for(var i=startindex;i<=endindex;i++)
        {
            swap(alpha,startindex,i);   //forward tracking
            permute(alpha,startindex+1,endindex);
            swap(alpha,i,startindex);   //backtracking
        }

    }
}
var swap = function(alpha, index1, index2)   //swapping
{
    var temp=alpha[index1];
    alpha[index1]=alpha[index2];
    alpha[index2]=temp;   
    return alpha;

}

module.exports={
    input : input
    

}