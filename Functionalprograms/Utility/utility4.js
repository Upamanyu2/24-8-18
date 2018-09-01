module.exports={
   
    table : function()
    {
        var N=process.argv[2];
        if(N>=32)
        console.log("Out of range");
        else{
            for(var i=1;i<=N;i++){
                console.log("2^"+ i +" = "+Math.pow(2,i));
            }
        }
        
    }
}