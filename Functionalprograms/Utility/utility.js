const _= require("lodash")
module.exports={
  calculate : function(year)
    {  
      var y = parseInt(year);
      var y1=y.toString();
       if(y1.length==4)
       {
        if(y%400==0||(y%100!=0 && y%4==0))
        console.log(" Leap year");
        else
        console.log(" Not a leapyear");  
       }
       else console.log("Invalid input")
    },
    username : function(userinput)
    {
        if(userinput.length>=3)
        console.log("Hello "+ userinput+"! How are you");
        else
        console.log("Enter atleast 3 characters");
    },
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
    
    },
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
    },
    Harmonic : function(H)
    {   var sum = 0;
        var num = 1;
        for(var i=1;i<=H;i++)
        {
          sum = sum + (num/i);
        }
        console.log("The limit is : "+ H+" The sum of the series: "+ sum);
    },
    factor : function(number)
    {
            while(number%2==0)
            {
                          console.log(2+" ");
                          number=number/2;
            }         
                      for(var i=3;i<=Math.sqrt(number);i=i+2)
                      {
                          while(number%i==0)
                          {
                              console.log(i+" ");
                              number=number/i;
                          }
                      }
                      if(number>2)
                      {
                          console.log(number);
                      }         
    },
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
            if(S>5 || S!=G)
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
    },
    coupon : function(n)
    {
        var random=[],i,n1;
        for(i=1;i<n;i++)
        {
            n1=Math.floor((Math.random() * 9999999999) + 10,000);
            random.push(n1);
        }
        console.log(random);
        console.log("No of coupon generated: "+random.length);
        var distinct=new Set(random);
        console.log(distinct);
        console.log("number of distinct coupons: "+[...distinct].length);
    },
    display : function(read,c,r)
    {
        var a=[];
       var limit=c*r;
       function b()
       {
                if(a.length>=limit)
                {   var k=0;
                    array2d=[];
                    var string='';
                    for(var i=0;i<r;i++)
                    {
                        for(var j=0;j<c;j++)
                        {
                           string = string + a[k]+' ';
                           k++;
                        }
                        array2d.push(string);
                        string='';
                    }
                    for(let index= 0;index<array2d.length;index++)
                    {
                        console.log(array2d[index]);
                    }
                    
                }
                else
                {
                    read.question("Enter the value: ",function(a1){
                        a.push(a1);
                        b();     
                    });
                
                }

         }
         b();
        },
        dist : function(x,y)
    {
        
        var d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2)); 
           if(Number.isNaN(d))
            {
                console.log("Enter a valid input");
                }
           else
            {
                console.log("The euclidean distance from the point is: "+d); 
            } 
    },
    calculate : function(a, b, c)
    {
        var delta=b*b-4*a*c;
        if(delta > 0)
        {
        var Root1=(-b+Math.sqrt(delta))/(2*a);
        var Root2=(-b-Math.sqrt(delta))/(2*a);
        console.log("The root 1 is: "+ Root1);
        console.log("The root 2 is: "+ Root2);
        }
        else if(delta == 0)
        {
            Root1=Root2=-b/(2*a);
            console.log("The value of root 1 and root 2 is: "+Root1);
        }
        else {
            var realPart=-b/(2*a);
            var imaginaryPart=Math.sqrt(-delta)/(2*a);
            console.log("Value of root 1: " + realPart + imaginaryPart+"i");
            console.log("Value of root 2: "+ realPart -  imaginaryPart+"i");
        }
    },
    windchill1 : function(t,v)
    {
      
      if(t<50 &&(v<3 || v>120))
      {
           w = 35.74 + 0.6215*t*(Math.pow((0.4275*t-35.75)*v,0.16));
           y=parseFloat(w);
          console.log("The windchill for today is: "+ y);
      }
      else console.log("Cannot compute as the rang of v or t does not match: ");
    },

    input : function(n)
    {
       var alpha=[]
       var alpha=n.split('');
       permute(alpha,0,alpha.length-1)
    },
    getCurrentTime : function() 
    {
        var a=new Date();
        var start= a.getTime();
        return start;
    },
    getElapsedTime: function(startTime, stopTime)
    {
        var e=(stopTime-startTime)/1000;
        return e;
    }, 
    findTRiplets : function(read,N)
    {   var a=[];
        var a2=[];
        count=0;
        function value(N)
        {
            if(a.length>=N)
            {  
                for(var i=0;i<N;i++)
               {
                for(var j=iywfssdvsfsfg+1;j<N;j++)
                     {
                        for(var k=j+1;k<N;k++)
                          {
                             if(Number(a[i])+Number(a[j])+Number(a[k])===0) 
                             {
                                 if(Number(a[i])!=Number(a[j])!=Number(a[k]))
                                {  count++;
                                   console.log('triplets found [' + a[i] + ', ' + a[j] + ', ' + a[k] + ']');
                                   a2.push(a[i]+','+a[j]+','+a[k]); 
                                }

                             }
                                
                          }
                      }
                      
               }
               var set1=new Set(a2);
               console.log("The count of the triplets:"+count);
               if([...set1].length!=0)
               {
                   console.log("Distinct triplets are: "+[...set1]);
                   console.log("Number of distinct triplets are: "+[...set1].length);
               }  
            }                   
            else
            {
                read.question(
                    188,
                    196,"Enter the values: ",function(a1){
                    a.push(a1);
                    value(N);
                });
            }
        }
        value(N);
        
    },



    markBoard : function(position,mark)
    {
      board[position]=mark.toUpperCase();
    },
    printBoard : function() {
        console.log('\n' +
            ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
            ' ---------\n' +
            ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
            ' ---------\n' +
            ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
    
    },
    isInt : function(value)
    {
        var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
    },
    validateMove  : function(position) {
       return (this.isInt(position) === true && board[position] === ' ') 
            
    },
      checkWin : function(player) {
        for (var i = 0; i < winCombinations.length; i++) {
            var markCount = 0;
            for (var j = 0; j < winCombinations[i].length; j++) {
                if (board[winCombinations[i][j]] === player) {
                    markCount++;
                }
                if (markCount === 3) {
                    return true;
                }
            }
        }
        return false;
    }      
}

var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];






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
