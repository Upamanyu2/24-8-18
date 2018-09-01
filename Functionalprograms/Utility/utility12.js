module.exports={
    windchill1 : function(t,v)
    {
      
      if(t<50 &&(v<3 || v>120))
      {
           w = 35.74 + 0.6215*t*(Math.pow((0.4275*t-35.75)*v,0.16));
           y=parseFloat(w);
          console.log("The windchill for today is: "+ y);
      }
      else console.log("Cannot compute as the rang of v or t does not match: ");
    }

}