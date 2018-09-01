module.exports={
    game : function(G,S,N)
    {
        var winCount=0;
        var loseCount=0;
        var percentW;
        var percentL;
        var betCount=0;
        var avg;
        for(var i=1;i<=N;i++)
        {
            
            var r=Math.random();
            var x = Math.floor((Math.random() * N) + 1);
            if(S>5||S!=G)
            {
                if(r>0.5)
                {
                    betCount++;
                    S=S-x;
                    loseCount++;
                }
                else{
                    betCount++;
                    S=S+x;
                    winCount++;} 
            }
            else {
                   x=1;
                   if(r>0.5)
                   {
                       betCount++;
                       S=S-x;
                       loseCount++;
                   }
                   else {
                       betCount++;
                       S=S+x;
                   winCount++;
                   }
            }
   
        }
        percentW=(winCount/N)*100;
        percentL=(loseCount/N)*100;
        avg=(winCount+loseCount+betCount)/N;
        console.log("Average of the result (win/loss/no of bets made): " + avg);
        console.log("Number of bets made "+ betCount);
        console.log("Number of win "+ winCount);
        console.log("Number of loss "+ loseCount);
        console.log("Percentage of win: "+ percentW);
        console.log("Percentage of lose: "+ percentL);
     
    }
}