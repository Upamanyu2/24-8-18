module.exports={
    inventory : function(){
       var fs = require('fs');
       //var readlinesync = require('readline-sync');
       var text = fs.readFileSync('Inventory1.JSON');
       var obj = JSON.parse(text);
       var total=0,total1=0,total2=0;
       //console.log(obj);
       for(var i=0;i<obj.Rice.Property.length;i++){
            total=total+(obj.Rice.Weight[i]*obj.Rice.Price[i]);
       } 
       for(var j=0;j<obj.Wheat.Property.length;j++){
            total1=total1+(obj.Wheat.Weight[j]*obj.Wheat.Price[j]);
        } 
        for(var k=0;k<obj.Pulses.Property.length;k++){
          total2=total2+(obj.Pulses.Weight[k]*obj.Pulses.Price[k]);  
        } 
        //console.log(obj);
       console.log("The price of inventory Rice: "+total);
       console.log("The price of inventory Wheat: "+total1);
       console.log("The price of inventory Pulses: "+total2);
    }
}