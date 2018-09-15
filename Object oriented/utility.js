module.exports={
    inventory : function(){
       var fs = require('fs');
       //var readlinesync = require('readline-sync');
       var text = fs.readFileSync('./JSON_FILES/Inventory1.JSON');
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
    },
    message : function(name,full_name,mobile_number){
      var fs = require('fs');
      var text = fs.readFileSync('./JSON_FILES/Message.JSON');
      var obj = JSON.parse(text);
      var String = JSON.stringify(obj);
      console.log(String);
      var regex = /<<name>>/gi;
      //var name="Upamanyu"
      String=String.replace(regex,name);
      regex=/<<full name>>/gi;
      String=String.replace(regex,full_name);
      regex=/xxxxxxxxxx/gi;
      String=String.replace(regex,mobile_number);
      var dateObj=new Date();
      var d=dateObj.getDate();
      var m=dateObj.getMonth();
      var y=dateObj.getFullYear();
      var date=""
      date+=d+'/'+m+'/'+y;
      var regex1=date;
      //var s="01/01/2016";
      //regex=/s/gi
      String=String.replace("01/01/2016",regex1);
      console.log(String);
      //var String1=JSON.stringify(obj);
      fs.writeFile('./JSON_FILES/Message.JSON',String,function(error){
          console.log("written file!!")
      });


    },
    stockCalculation : function(n){
       var fs = require('fs');
       var readlinesync=require('readline-sync');
       var text = fs.readFileSync('./JSON_FILES/Input.JSON');
       var myObj=JSON.parse(text);
       var price=[],price1=[];//price2=[];
       var total=0,total1=0;//total2=0;
       for(var i=0;i<n;i++){
           myObj.Stock.StockNames[i]=readlinesync.question("Enter the name of stock: ");
           myObj.Stock.Number_of_shares[i]=readlinesync.question("Enter the number of shares: ");
           myObj.Stock.SharePrice[i]=readlinesync.question("Enter the price of one share (in rupees): ");
           myObj.Stock1.StockNames[i]=readlinesync.question("Enter the name of stock1: ");
           myObj.Stock1.Number_of_shares[i]=readlinesync.question("Enter the number of shares: ");
           myObj.Stock1.SharePrice[i]=readlinesync.question("Enter the price of one share (in rupees): ");
           //    myObj.Stock2.StockNames[i]=readlinesync.question("Enter the name of stock2: ");
           //    myObj.Stock2.Number_of_shares[i]=readlinesync.question("Enter the number of shares: ");
           //    myObj.Stock2.SharePrice[i]=readlinesync.question("Enter the price of one share (in rupees): ");
       }
       for(var j=0;j<n;j++){
           price[j]=myObj.Stock.Number_of_shares[j]*myObj.Stock.SharePrice[j];
           price1[j]=myObj.Stock1.Number_of_shares[j]*myObj.Stock1.SharePrice[j];
           //price2[j]=myObj.Stock2.Number_of_shares[j]*myObj.Stock2.SharePrice[j];
       }
       for(var k=0;k<n;k++){
           console.log("Total amount of each inventory " + myObj.Stock.StockNames[k] + " is (in rupees) " + price[k]);
           console.log("Total amount of each inventory " + myObj.Stock1.StockNames[k] + " is (in rupees) " + price1[k]);
           //    console.log("Total amount of each inventory " + myObj.Stock2.StockNames[k] + " is (in rupees) " + price2[k]);
           total=total+price[k];
           total1=total1+price1[k];
           //    total2=total2+price2[k];
       }
       console.log("The total price of the whole stock (in rupees): "+total);
       console.log("The total price of the whole stock1 (in rupees): "+total1);
       //    console.log("The total price of the whole stock2 (in rupees): "+total2);
       var String=JSON.stringify(myObj,null,2);
       fs.writeFileSync('./JSON_FILES/Input.JSON',String);
       console.log("Saved!!")
       return myObj;
    },
    inventory1 : function(num){
      var myObj=this.stockCalculation(num);
      var  manager=new InventoryManager();
      manager.functionCalculate(myObj,num);
      var Str=manager.functionReturn(myObj);
      console.log(Str);
    },
    stockAccount : function(name,num,price){
        var fs = require('fs');
        var readlinesync=require('readline-sync');
        var text = fs.readFileSync('./JSON_FILES/Company.JSON');
        var text1 = fs.readFileSync('./JSON_FILES/User.JSON');
        var myObj1 = JSON.parse(text);
        var myObj=JSON.parse(text1);
        var account=new StockAccount(name,num,price);
        var value=account.valueof();
        myObj.ShareName=name;
        myObj.ShareNumber=num;
        myObj.SharePrice=price;
        var choice=readlinesync.question("Enter your choice (Buy--> b \n Sell--> s \n Print report--> p)");
        switch(choice)
        {
            case 's' : account.sell(name,price);
            account.save(myObj,myObj1);
            break;
            case 'b' : fs.writeFileSync('./JSON_FILES/User.JSON',JSON.stringify(myObj));
            account.buy(name,price);
            account.save(myObj,myObj1);
            break;
            case 'p' : account.valueof();
            account.printReport(choice);
            break;
            default : console.log("Invalid choice");
            console.log("Enter your choice again");
            this.stockAccount(name,num,price);
        }
    }

}
class InventoryManager{
    functionCalculate(myObj,num) {
        var price=[],price1=[];//price2=[];
        var total=0,total1=0;//total2=0;
        for(var j=0;j<num;j++){
            price[j]=myObj.Stock.Number_of_shares[j]*myObj.Stock.SharePrice[j];
            price1[j]=myObj.Stock1.Number_of_shares[j]*myObj.Stock1.SharePrice[j];
            //price2[j]=myObj.Stock2.Number_of_shares[j]*myObj.Stock2.SharePrice[j];
        }
        for(var k=0;k<num;k++){
            console.log("Total amount of each inventory " + myObj.Stock.StockNames[k] + " is (in rupees) " + price[k]);
            console.log("Total amount of each inventory " + myObj.Stock1.StockNames[k] + " is (in rupees) " + price1[k]);
            //console.log("Total amount of each inventory " + myObj.Stock2.StockNames[k] + " is (in rupees) " + price2[k]);
            total=total+price[k];
            total1=total1+price1[k];
            //total2=total2+price2[k];
        }
       
        console.log("The total price of the whole stock (in rupees): "+total);
        console.log("The total price of the whole stock1 (in rupees): "+total1);
        //console.log("The total price of the whole stock2 (in rupees): "+total2); 
        
    }
    functionReturn(myObj){
      var String = JSON.stringify(myObj,null,2);
      return String;


    }
}
class StockAccount{
    StockAccount(ShareName,StockNumber,StockPrice) {
      this.name=ShareName;
      this.number=StockNumber;
      this.price=StockPrice;
    }
    valueof(){
        var fs = require('fs');
        //var text = fs.readFileSync('./JSON_FILES/Company.JSON');
        var text1 = fs.readFileSync('./JSON_FILES/User.JSON');
        //var myObj1=JSON.parse(text);
        var myObj=JSON.parse(text1);
        var totalprice=Number(myObj.ShareNumber)*Number(myObj.SharePrice);
        var number_of_shares=Number(myObj.ShareNumber);
        console.log("The value of "+number_of_shares+" shares : "+"is "+ totalprice);
        
    }
    sell(name,price){
        var fs = require('fs');
        var text = fs.readFileSync('./JSON_FILES/Company.JSON');
        var text1 = fs.readFileSync('./JSON_FILES/User.JSON');
        var myObj1=JSON.parse(text);
        var myObj=JSON.parse(text1);
        //var number=0,cost=0;
        for(var i=0;i<3;i++){
            if(name==myObj1.Stock.ShareName[i]){
                myObj1.Stock.ShareNumber[i] = myObj1.Stock.ShareNumber[i] + Number(myObj.ShareNumber);
                myObj1.Stock.SharePrice[i] = myObj1.Stock.SharePrice[i] + (Number(myObj.ShareNumber)*price);
            }
            if(name==myObj1.Stock1.ShareName[i]){
                myObj1.Stock1.ShareNumber[i] = myObj1.Stock1.ShareNumber[i] + Number(myObj.ShareNumber);
                myObj1.Stock1.SharePrice[i] = myObj1.Stock1.SharePrice[i] + (Number(myObj.ShareNumber)*price);
            } 
            if(name==myObj1.Stock2.ShareName[i]){
                myObj1.Stock2.ShareNumber[i] = myObj1.Stock2.ShareNumber[i] + Number(myObj.ShareNumber);
                myObj1.Stock2.SharePrice[i] = myObj1.Stock2.SharePrice[i] + (Number(myObj.ShareNumber)*price);
            }
        }
    }
    buy(name,price){
        var fs = require('fs');
        var text = fs.readFileSync('./JSON_FILES/Company.JSON');
        var text1 = fs.readFileSync('./JSON_FILES/Company.JSON');
        var myObj1=JSON.parse(text);
        var myObj=JSON.parse(text1);
        //var number=0,cost=0;
        for(var i=0;i<3;i++){
            if(name==myObj1.Stock.ShareName[i]){
                try{
                    if(myObj1.Stock.ShareNumber[i] <  Number(myObj.ShareNumber[i])) throw "Insufficient number of shares";
                    else if(myObj1.Stock.SharePrice[i] < (Number(myObj.ShareNumber[i])*price)) throw "Insufficient fund modify each share price";
                    else{
                        myObj1.Stock.ShareNumber[i] = myObj1.Stock.ShareNumber[i] - Number(myObj.ShareNumber);
                        myObj1.Stock.SharePrice[i] = myObj1.Stock.SharePrice[i] - (Number(myObj.ShareNumber)*price);
                    }
                }
                catch(err){
                    console.log(err);
                    this.sell(price);
                }
               
            }
            if(name==myObj1.Stock1.ShareName[i]){
                try{
                    if(myObj1.Stock1.ShareNumber[i] < Number(myObj.ShareNumber)) throw "Insufficient number of shares";
                    if(myObj1.Stock1.SharePrice[i] < (Number(myObj.ShareNumber)*price)) throw "Insufficient fund modify each share price";
                    else{
                        myObj1.Stock1.ShareNumber[i] = myObj1.Stock1.ShareNumber[i] - Number(myObj.ShareNumber);
                        myObj1.Stock1.SharePrice[i] = myObj1.Stock1.SharePrice[i] - (Number(myObj.ShareNumber)*price);
                    }
                }
                catch(err){
                    console.log(err);
                    this.sell.price(price);
                }
               
            } 
            if(name==myObj1.Stock2.ShareName[i]){
                try{
                    if(myObj1.Stock2.ShareNumber[i] < Number(myObj.ShareNumber)) throw "Insufficient number of shares";
                    if(myObj1.Stock2.SharePrice[i] < (Number(myObj.ShareNumber)*price)) throw "Insufficient fund modify each share price";
                    else{
                        myObj1.Stock2.ShareNumber[i] = myObj1.Stock2.ShareNumber[i] - Number(myObj.ShareNumber);
                        myObj1.Stock2.SharePrice[i] = myObj1.Stock2.SharePrice[i] - (Number(myObj.ShareNumber)*price);
                    }
                }
                catch(err){
                    console.log(err);
                    this.sell(price);
                }
                
            }
        }
    }
    save(myObj,myObj1){
        var fs = require('fs');
        // fs.writeFileSync('./JSON_FILES/Company.JSON',JSON.stringify(myObj1));
        // console.log(myObj1)
        fs.writeFileSync('./JSON_FILES/User.JSON',JSON.stringify(myObj));
        console.log("The files are saved!!")
    }
    printReport(choice){
        var fs = require('fs');
        var text = fs.readFileSync('./JSON_FILES/Company.JSON');
        var text1 = fs.readFileSync('./JSON_FILES/User.JSON');
        var myObj1=JSON.parse(text);
        var myObj=JSON.parse(text1);
        var price=Number(myObj.ShareNumber)*Number(myObj.SharePrice);
        var number_of_shares=Number(myObj.ShareNumber);
        if(choice=='s'){
            console.log("Number of shares sold: "+number_of_shares);
            console.log("Share price deducted: "+price);
        }
        if(choice=='b'){
            console.log("Number of shares buyed: "+number_of_shares);
            console.log("Share price added: "+price);
        }   
    }
}
