module.exports={
    /*The function checks whether the two inputted string is anagram or not.*/ 
    anagram : function(x,y)
       {   array1=[x.length];
           array2=[y.length];
           
           if(isNaN(x) && isNaN(y) && x.length==y.length) // Validation for accepting only string.
           {for(var i=0;i<x.length;i++)
           {
               array1.push(x.charAt(i));
           }
           for(var j=0;j<x.length;j++)
           {
               array2.push(y.charAt(j));
           }
           array1.sort();
           array2.sort();
           var s='';
           var s1='';
           for(i=0;i<array1.length;i++)
           {
              s=s+array1[i];
           }
           for(i=0;i<array2.length;i++)
           {
              s1=s1+array2[i];
           }
           if(s1.toUpperCase()==s.toUpperCase())  // comparing the strings are equal or not.
           {
               console.log("It is an anagram.");
           }
           else console.log("It is not an anagram.");}
           else {
               console.log("Invalid input");              
           }
     
            },
            /**
             * This is a module function to display all the prime numbers between a range that is given by user*/
            primeChecker : function(min, max)
            {   
                var flag=0;
                for(var i=min;i<=max;i++)   //loop is running in the given range for catching all the prime numbers.
                {
                    if(i==2)       //as the 2 is also a prime number and it is not catched in the loop.
                    {
                        console.log(2); 
                    }
                   
                   for(var j=2;j<i;j++)
                   {    
                       if(i%j==0)
                       {
                           flag=0; //flag is not set for all the non-prime.
                           break;
                       }
                       else flag=1; //flag is set for all the prime numbers.
                      
                   }
                   if(flag==1)     //filtering and printing all the prime numbers.
                       {
                        console.log(i);
                       }
                    }   
            },
/*Finds anagram and palindromic numbers between a range*/
            palinAnag : function(num)
            {var arr=[];var arr2=[];
           // if(isNaN(num)) console.log("Invalid input")
            for(var i = 0; i <= num; i++)
            {  
                for( var j = 2; j < i; j++)
                {
                    if(i % j == 0)
                    {
                        var count = 0;
                        break;
                    }
                    else
                    {
                        count = 1;
                    }
                }
                if(count == 1)
                {  
                    arr.push(i);
                    arr2.push(i);
                }
            }
             for(var i=0;i<=arr.length-1;i++)
            {
            for(var j=i+1;j<=arr.length;j++)
            {
             var str1=''+arr[i];
             var str2=''+arr[j];
            
            
            if(str1.length == str2.length)
            {   
             var sortStr1 = str1.split('').sort().join(''); //sorting to detect anagrams.
             var sortStr2 = str2.split('').sort().join('');
        
            if(sortStr1 === sortStr2)
            console.log("The Two prime no are Anagram :"+arr[i]+" & "+arr[j])
            }
            }
            } 
            for (var r = 0; r < arr2.length; r++)
                {  
                    var originalInteger=(arr2[r]);
                
                var n=originalInteger;
                 var remainder;
                 var reversedInteger=0;
                // reversed integer is stored in variable 
                while( n>0 )
                {
                    remainder = n%10;
                    reversedInteger = reversedInteger*10 + remainder;
                    n = parseInt(n/10);
                }
            
                // palindrome if orignalInteger and reversedInteger are equal
                if (originalInteger === reversedInteger)
                   console.log( "Prime pallindromes are: "+originalInteger);
            }
        },
/*Finds the number thought by the user and displays it at last*/
        guess : function(num) 
        {   var readlineSync = require('readline-sync');
            var arr=[];
            
            for(var i=0;i<num;i++)
            {
              arr.push(i);
            }
            var l=0;
            var r=arr.length;
                while(l <= r) //to run the loop through the array elements.
                {  var mid=Math.floor((l+r)/2);
                    var x=readlineSync.question(`If the number is ${arr[mid]} press 1  else press 0: `);//readline-sync is used to know the user choice.
                    //if(arr[mid])
                    if(x=='0')
                    {
                        x1=readlineSync.question(`Press 0 if the number is less than  ${arr[mid]} \nPress  1 if the number is greater than  ${arr[mid]}: `);
                        if(x1=='0')
                        {
                            r=mid-1;
                            

                        }
                        if(x1=='1')
                        {
                            l=mid+1;
                            
                        }
                    }
                    if(x=='1')
                    {
                       console.log(arr[mid]+' is the number thought');
                       process.exit();
                    }

                }
        },
  /*Searches the word in the file present and accordingly
  mentioned the file is present in the external file or not.*/              
       brinarySearch : function(str)
       {
        var fs = require('fs');
        var text = fs.readFileSync('myFile.txt','utf8');//used to read the file.
           var arr=text.split(" "); //splits each string from the separator
           arr=arr.sort(); //sorts the string
           var r=0;
           var l=arr.length;
           while(r<=l)  //loop for brinary search starts.
           {
               var mid =Math.floor((r+l)/2);
               if(str==arr[mid])
               {
                   console.log("The word is present in the file!!"); //prints if the word is present in the file.
                   process.exit();
               }
               else if(str>arr[mid])
               {
                   r=mid+1;
               }
               else if(str<arr[mid])
               {
                   l=mid-1;
               }
               else{
                   console.log("Oops word not found in the file!!");//prints if the word is not present in the file.
                   process.exit();
               }

           }
       },
       /*Performs insertion sort to sort the strings inputted by the user*/
       insertionSort : function(arr)
       {   
          var n=arr.length;
          for(var j=0;j<n;++j)//loop for traversing the array.
          {
              var key=arr[j];
              var k=j-1;
              while(k>=0 && Number(arr[k])>Number(key))
              {
                  arr[k+1]=arr[k];      /*swapping of position is 
                                         performed*/
                   k=k-1;
              }
              arr[k+1]=key;             
          }
          
         return arr;  
       },  
       insertionSort1 : function(arr)
       {   
          var n=arr.length;
          for(var j=0;j<n;++j)//loop for traversing the array.
          {
              var key=arr[j];
              var k=j-1;
              while(k>=0 && arr[k]>key)
              {
                  arr[k+1]=arr[k];      /*swapping of position is 
                                         performed*/
                   k=k-1;
              }
              arr[k+1]=key;             
          }
          
         return arr;  
       },  
      /*Performs insertion sort to sort the numebrs inputted by the user*/ 
       bubbleSort : function(arr)
       {
           var temp;
           var n = arr.length;
           for(var j=0;j<n-1;j++)  //loop for picking one variable.
           
               {for(k=0;k<n-j-1;k++) //loop for picking another variable
               
                 {  if(Number.parseInt(arr[k])>Number.parseInt(arr[k+1]))     /*Variables are compared
                                             by this condition and 
                                            placed in the particular place*/
                   {
                    temp=arr[k];
                    arr[k]=arr[k+1];
                    arr[k+1]=temp;
                   }    
                }
            }
           
       },
       /*Performs merge sort for the array*/
     mergesort : function(array)
     {   
        if (array.length === 1) 
            // return once we hit an array with a single item
            return array;
       var middle = Math.floor(array.length / 2) ;// get the middle item of the array rounded down
        var left = array.slice(0, middle) ;// items on the left side
        var right = array.slice(middle) ;// items on the right side
      
        return this.merge(
          this.mergesort(left),
          this.mergesort(right)
        )
        
    },
   // compare the arrays item by item and return the concatenated result
   merge:function (left, right) 
   {
    var result = [];
  var indexLeft = 0;
  var indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))

},
/*conversion of temperatue scale*/
    conversion: function(value,temp)
    {
        if(isNaN(temp)===false)
        {
            if(value.toLocaleUpperCase()==='F')
            {
                var temp1=(temp-32)*(5/9); //converts to celsius
                console.log("The temperature in celsius is: "+temp1+" C");
            }
            if(value.toLocaleUpperCase()==='C')
            {
                var temp2=(temp*(9/5))+32; //converts to fahrenheit
                console.log("The temperature in fahrenheit: "+temp2+" F")
            }
    
        }
        else console.log("Invalid input");
       
    },
    /*Calculates the monthly payment*/
    monthlyPayment : function(P,Y,R)
    {
        var r=R/(12*100);
        var n=12*Y;
        var payment=(P*r)/(1-(Math.pow(1+r,(-n)))); //Calculates the monthly payment accorting to some interest.
        if(isNaN(payment)==true)
        {
            console.log("Invalid input");
        }
        else
        console.log("The monthly payment is: "+payment);
    },
    /*Calculates the square root of the number provided as user input*/
    sqrt(value)
    { var t=value;
       
        while(Math.abs(t-value/t)>Number.EPSILON*t)//condition for the step by step process of acalculting the loop.
        {
            t=((value/t)+t)/2;
        }
    
     console.log("THe approx root of the value is: "+t);
    },
    /*To calculate the day of the week*/
    dayOfWeek : function(d, m, y)
    {
       
       if(isNaN(d)===false && isNaN(m)===false && isNaN(y)===false)
        {
            if ((y%400)||(y%100 && y%4))
            {
                try
                {
                    if(m==2 && d>29) throw "enter a valid date"
                }
                catch(err)
                {
                   console.log(err);
                   process.exit();
                }
            }
            else
            {
                try{
                    if(m==2 && d>28) "enter a valid date"
                }
                catch(err)
                {
                    console.log(err);
                    process.exit();
                }

            }
        var y1=(y-((14-m)/12));
        y1= Number.parseInt(y1);
        //console.log(y1);
        var x=(y1+(y1/4)-(y1/100)+(y1/400));
        x=Number.parseInt(x);
        //console.log(x);
        var m1=m+(12*((14-m)/12))-2;
        m1=Number.parseInt(m1);
        //console.log(m1);
        var d1=parseInt(((d+x+(31*m1))/12)%7-1);
        //var d1=d1-1;
        var day='';
        switch(d1)                              /*switch case for printing
                                                  the day according to the 
                                                  number*/
        {
            case 0:
            day = day+'Sunday';
            break;
            case 1:
            day = day+'Monday';
            break;
            case 2: 
            day = day+'Tuesday';
            break;
            case 3:
            day = day+'Wednesday';
            break;
            case 4:
            day = day+'Thrusday';
            break;
            case 5:
            day = day+'Friday';
            break;
            case 6:
            day = day+'Saturday';
            break;
        }
        console.log(day);
       // console.log(d1);
    }
    else console.log("Invalid input");

    },
    toBrinary(num)
    {   
       var brinaryNum=[];
       var brinaryNum1=[];
       brinaryNum.length=64;
       brinaryNum.length=64;
       var i=0;
       var k=0;
       while(num>0)
       {
           brinaryNum[i]=Math.floor(num%2);
           num=Math.floor(num/2);
           i++;
       }
       for(var j=i-1;j>=0;j--)
       {
           
           console.log(brinaryNum[j]);
           brinaryNum1[k]=brinaryNum[j];
           k++;
       }
       return brinaryNum1;
    },
    /*To swap the nobble of bits and check whether it is a power of 2 or not.*/
    bitsSwap:function(val)
{
    var arr=[];

while(val>0)
    {
        var r=val%2;
        arr.unshift(r);
        val=Math.floor(val/2);
        
    }
while(arr.length<8)                    //
{
    for(i=0;i<(8-arr.length);i++)   //adding 0 to blank bits
    {
        arr.unshift(0);             //
    }

}
console.log(arr);
for(var i=0;i<4;i++)
{
    var temp=arr[4+i]       //
    arr[4+i]=arr[i];        //swaping bits
    arr[i]=temp;            //
}
console.log(arr)
var sum=0;

for(i=7;i>=0;i--)
{
    //console.log(Number(arr[7-i]))
    sum=sum+(Number(arr[7-i])*this.pow(i)); //converting to decimal

}

console.log('value after bit swapping will be-->'+sum)
this.isPower(sum);


},

pow:function(val)
{
    //console.log(val)
    var a=1;
    for(var i=1;i<=val;i++)
    {
        a=a*2;
    }
    //console.log(a)
    return a;
},
/*To check whether a number is a power of two.*/
isPower:function(val)
{
    var temp=val;
    var count=0;
    if(val%2==0)
    {
        while(val%2==0)
        {
            count++;
            val=val/2;
        }
        if(val==1)
        console.log('\nit is  power of 2-->2^'+count+'= '+temp);
        else 
        console.log('\nooups..It is not a power of 2\n');
    }
    else   
        console.log('\nooups..It is not a power of 2\n');


},
/*To calculate the number of notes for the amount provided*/
calculateMinNoNote : function(amount,mNote)
{
        
        if(amount == 0) return;
        
    
        //calculate 1000 rupess notes
        if(amount>=1000){
            mNote+=Math.floor(amount/1000);
            console.log("1000 Rupes Notes is: "+Math.floor(amount/1000));
            if(amount%1000 == 0){
                console.log("min note required:"+(mNote))
                return;}
            else
            this.calculateMinNoNote(amount%1000,mNote);
        }
        
        //calculate 500 rupess notes
        else if(amount>= 500){
            mNote+=Math.floor(amount/500);
            console.log("500 Rupes Notes is: "+Math.floor(amount/500));
            if(amount%500 == 0){
                console.log("min note required:"+(mNote))
                return;
            }
            else{
            this.calculateMinNoNote(amount%500,mNote);
            }
        }

        //calculate 100 rupess notes
        else if(amount>= 100){
            mNote+=Math.floor(amount/100); 
            console.log("100 Rupes Notes is: "+Math.floor(amount/100));
            if(amount%100 == 0){console.log("min note required:"+(mNote))
                return;}
            else
            this.calculateMinNoNote(amount%100,mNote);
        }

        //calculate 50 rupess notes
        else if(amount>= 50){
            mNote+=Math.floor(amount/50);
            console.log("50 Rupes Notes is: "+Math.floor(amount/50));
            if(amount%50 == 0){ console.log("min note required:"+(mNote))
                return;}
            else
            this.calculateMinNoNote(amount%50,mNote);
        }
        
        //calculate 10 rupess notes
        else if(amount>= 10){
            mNote+=Math.floor(amount/10); 
            console.log("10 Rupes Notes is: "+(amount/10));
            if(amount%10 == 0){

         console.log("min note required:"+(mNote))
                return;}
            else
            this.calculateMinNoNote(amount%10,mNote);
        }

        //calculate 5 rupess notes
        else if(amount>= 5){
            mNote+=Math.floor(amount/5); 
            console.log("5 Rupes Notes is: "+Math.floor(amount/5));
            if(amount%5 == 0){
                console.log("min note required:"+(mNote))
                return;}
            else
            this.calculateMinNoNote(amount%5,mNote);
        }

        //calculate 2 rupess notes
        else if(amount>= 2){
            mNote+=Math.floor(amount/2); 
            console.log("2 Rupes Notes is: "+Math.floor(amount/2));
            if(amount%2 == 0)
            {console.log("min note required:"+(mNote));
                return;}
            else{
                this.calculateMinNoNote(amount%2,mNote);
            }
        }

        //calculate 1 rupess notes
        else if(amount>= 1){
            mNote+=Math.floor(amount/1);
            console.log("1 Rupes Notes is: "+Math.floor(amount/1));
            if(amount%1 == 0)
              { console.log("min note required:"+(mNote));
                return;}
            else
                this.calculateMinNoNote(amount%1,mNote);
        }
},
/*To calculate the number of execution time for each function*/
everything : function(arr,search)
{ 
   
   arr=arr.sort();
   var r=0;
   var l=arr.length;
   while(r<=l)
   {
    var mid=Math.floor((r+l)/2);
    if(arr[mid]==search)
    {
        console.log("Your search element is present!!");
        return;
    }
    else if(search>arr[mid])
    {
        r=mid+1;
    }
    else if(search<arr[mid])
    {
        l=mid-1;
    }
    else 
    {
         console.log("Element not found!!");
         return;
    }
   }
},
bubblesort : function(arr)
{
    var temp;
    var n = arr.length;
    for(var j=0;j<n-1;j++)  //loop for picking one variable.
    
        {for(k=0;k<n-j-1;k++) //loop for picking another variable
        
          {  if(Number.parseInt(arr[k])>Number.parseInt(arr[k+1]))     /*Variables are compared
                                                                         by this condition and 
                                                                         placed in the particular place*/
            {
             temp=arr[k];
             arr[k]=arr[k+1];
             arr[k+1]=temp;
            }    
         }
     }
},
bubblesort1 : function(arr)
{
    var temp;
    var n = arr.length;
    for(var j=0;j<n-1;j++)  //loop for picking one variable.
    
        {for(k=0;k<n-j-1;k++) //loop for picking another variable
        
          {  if(arr[k]>arr[k+1])     /*Variables are compared
                                      by this condition and 
                                     placed in the particular place*/
            {
             temp=arr[k];
             arr[k]=arr[k+1];
             arr[k+1]=temp;
            }    
         }
     }
},
getCurrentTime : function()
{
    var t =  new Date();
    var a = t.getTime();
    return a;
},
getElapsedTime : function(a,a1)
{
    var elapsedTime=(a1-a);
    console.log("The time taken: "+elapsedTime+" millisecond");
}



  
}
