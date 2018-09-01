
module.exports={
    
    
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
    }

}

    
