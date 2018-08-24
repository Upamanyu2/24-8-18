
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
    }

}