module.exports={
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
    }
}