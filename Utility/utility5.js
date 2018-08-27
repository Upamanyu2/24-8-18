module.exports={
    Harmonic : function(H)
    {   var sum = 0;
        var num = 1;
        for(var i=1;i<=H;i++)
        {
          sum = sum + (num/i);
          
        }
        console.log("The limit is : "+ H+" The sum of the series: "+ sum);
    }
}