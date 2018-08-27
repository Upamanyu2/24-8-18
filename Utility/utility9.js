module.exports={
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
}
}