module.exports={
    Random : function(t)
    {
        var countH=0;
        var countT=0;
        for(i=1;i<=t;i++)
        {
            var r = Math.random();
            if(r<0.5)
            countH++;
            else countT++;
            
        }
       
     var percentH=(countH/t)*100;
     var percentT=(countT/t)*100;
     console.log("percentage of heads" +" "+ percentH + " "+ "percentage of tails "+percentT);
        
    }
}