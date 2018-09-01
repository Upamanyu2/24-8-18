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
           if(s1==s)  // comparing the strings are equal or not.
           {
               console.log("It is an anagram.");
           }
           else console.log("It is not an anagram.");}
           else {
               console.log("Invalid input");              
           }
     
            },
     /*This is a module function to display all the prime numbers between a range that is given by user*/
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
            if(isNaN(num)) console.log("Invalid input")
            for(var i = 0; i <= num; i++)
            {   if(i==2)  console.log("2")
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
           var arr=text.split(","); //splits each string from the separator
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
          for(var j=1;j<n;j++)//loop for traversing the array.
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
           
       },   
      /*Performs insertion sort to sort the numebrs inputted by the user*/ 
       bubbleSort : function(arr)
       {
           var n = arr.length;
           for(var j=0;j<n-1;j++)  //loop for picking one variable.
           
               for(k=0;k<n-j-1;k++) //loop for picking another variable
               
                   if(arr[k]>arr[k+1])     /*Variables are compared
                                             by this condition and 
                                            placed in the particular place*/
                   {
                    var temp=arr[k];
                    arr[k]=arr[k+1];
                    arr[k+1]=temp;
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
    coversion: function(temp,value)
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
    }
     

}
  

