module.exports={
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
                for(var j=i+1;j<N;j++)
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
                read.question("Enter the values: ",function(a1){
                    a.push(a1);
                    value(N);
                });
            }
        }
        value(N);
        
    }
}

