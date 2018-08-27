
var check = function(s,arr)
{   var permutations = [];
    var y=String(s);
    if (typeof (y) == 'string') 
    y = y.split('');
    if(y.length==0)
    permutations.push(arr.join(''));
    for(var i=0;i<y.length;i++)
    {
        var x = s.slice(i,1);
        arr.push(x);
        check(s,arr);
        arr.pop();
        s.slice(i,0,x);
        
    }
    console.log(permutations);
}

module.exports={
    check : check
    

}