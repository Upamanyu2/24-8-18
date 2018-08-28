module.exports={
    triple : function(read,N)
    {   
        var a=[];
        function b()
        {
            if(a.length>=N)
            {  
               for(var i=0;i<a.length;i++)
               {
                   for(var j=i+1;j<a.length;j++)
                      {
                          for(var k=j+1;k<a.length;k++)
                          {
                              if(((a[i]+a[j]+a[k])===0)&&(a[i]!=a[j]!=a[k]))
                              {
                                  console.log([a[i]+","+a[j]+","+a[k]]);
                              }
                              
                          }
                      }
                   
               }
            }
            else
            {
                read.question("Enter the values: ",function(a1){
                    a.push(a1);
                    b();
                });
            }
        }
        b();
        
    }
}