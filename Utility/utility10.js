module.exports={
    dist : function(x,y)
    {
        var d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        console.log("The euclidean distance from the point is: "+d);
    }
}