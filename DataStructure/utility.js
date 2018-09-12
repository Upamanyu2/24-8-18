class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class NodeLL {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

            // functions to be implemented
            // add(element)
            add(element) {
                // creates a new node
                var node = new Node(element);

                // to store current node
                var current;

                // if list is Empty add the
                // element and make it head
                if (this.head == null)
                    this.head = node;
                else {
                    current = this.head;

                    // iterate to the end of the
                    // list
                    while (current.next) {
                        current = current.next;
                    }

                    // add node
                    current.next = node;
                }
                this.size++;
            }
            //adding elements to ordered list with some modification
            add1(element){
               // console.log(element);
                //creats a node.
                var node1=new Node(element);
                //to store current node.
                var current=this.head;
                //to store previous node.
                var previous=null;
                //to stop traversing.
                var stop=false;
                while(current!==null && stop==false) //condition for traversing the node.
                  {
                       if(current.element>element)
                       stop = true;
                       else
                       {
                        previous=current;
                        current=current.next;
                       } 
                  }
                  var temp = node1;
                  if (previous==null)
                  {
                      temp.next=this.head;
                      this.head=temp;
                  }
                  else
                  {
                      temp.next=current;
                      previous.next=temp;
                  }    
            }     
            // insert element at a specific position of a list.
            insertAt(element, index) {
                if (index > 0 && index > this.size)
                    return false;
                else {
                    // creates a new node
                    var node = new Node(element);
                    var curr, prev;

                    curr = this.head;

                    // add the element to the
                    // first index
                    if (index == 0) {
                        node.next = head;
                        this.head = node;
                    } else {
                        curr = this.head;
                        var it = 0;

                        // iterate over the list to find
                        // the position to insert
                        while (it < index) {
                            it++;
                            prev = curr;
                            curr = curr.next;
                        }

                        // adding an element
                        node.next = curr;
                        prev.next = node;
                    }
                    this.size++;
                }
            }
            // removeFrom(location)
            removeFrom(index) {
                if (index > 0 && index > this.size)
                    return -1;
                else {
                    var curr, prev, it = 0;
                    curr = this.head;
                    prev = curr;

                    // deleting first element
                    if (index === 0) {
                        this.head = curr.next;
                    } else {
                        // iterate over the list to the
                        // position to removce an element
                        while (it < index) {
                            it++;
                            prev = curr;
                            curr = curr.next;
                        }

                        // remove the element
                        prev.next = curr.next;
                    }
                    this.size--;

                    // return the remove element
                    return curr.element;
                }
            }
            // removeElement(element)
            removeElement(element) {
                var current = this.head;
                var prev = null;

                // iterate over the list
                while (current != null) {
                    // comparing element with current
                    // element if found then remove the
                    // and return true
                    if (current.element === element) {
                        if (prev == null) {
                            this.head = current.next;
                        } else {
                            prev.next = current.next;
                        }
                        this.size--;
                        return current.element;
                    }
                    prev = current;
                    current = current.next;
                }
                return -1;
            }
            removeElement1(element) {
                var current = this.head;
                var prev = null;

                // iterate over the list
                while (current != null) {
                    // comparing element with current
                    // element if found then remove the
                    // and return true
                    if (Number(current.element) == Number(element)) {
                        if (prev == null) {
                            this.head = current.next;
                        } else {
                            prev.next = current.next;
                        }
                        this.size--;
                        return current.element;
                    }
                    prev = current;
                    current = current.next;
                }
                return -1;
            }
            // Helper Methods
            // It returns the index of a given element, if the element is in the list. 
            indexOf(element) {
                var count = 0;
                var current = this.head;

                // iterae over the list
                while (current != null) {
                    // compare each element of the list
                    // with given element
                    if (current.element === element)
                        return count;
                    count++;
                    current = current.next;
                }

                // not found
                return -1;
            }
            // determines whether the list is empty or not
            isEmpty() {
                return this.size == 0;
            }
            // gives the size_Of_List
            size_of_list() {
                console.log(this.size);
            }
            search(str)
            {
                var curr = this.head;
                    while (curr) 
                    {
                                if (curr.element === str) {
                                return curr;
                                
                                }
                                curr = curr.next;
                                
                    }

            return null;
            }
            search1(str1){
                //to store current node
                var current=this.head;
                //to return whether found or not
                var found=false;
                //to stop the search without traversing the whole list
                var stop=false;
                while(current!==null && found==false && stop==false)
                {
                    if(current.element == str1)
                        found = true;
                    else{
                        if(current.element>str1)
                        stop = true;
                        else
                        current=current.next;
                    }
                    
                }
               return found;
            }
            // PrintList
            printList() {
                var curr = this.head;
                //console.log(JSON.stringify( curr));
                var str = "";
                while (curr) {
                    str += curr.element + " ";
                    curr = curr.next;
                }
                console.log(str);
            }
            //converting to string
            toString(){
                var curr=this.head;
                var string=" ";
                while(curr)
                {
                    string=string + " " +curr.element;
                    curr = curr.next;
                }
                return string;


            }
            toString1(){
                var curr=this.head;
                var string1=" ";
                while(curr)
                {
                    string1=string1+curr.element;
                    curr = curr.next;
                    return string1;     
                }
                return null;
            }
            
}
class Stack{
    constructor()
    {
        this.items=[]
    }
    //for adding elements
    push(element)
    {
        this.items.push(element);
    }
    //for removing elements
    pop()
    {
        if(this.items.length==0)
        {
            return "Underflow";
        }
        return this.items.pop();
    }
    //returns the element without removing
    peek()
    {
        return this.items[this.items.length-1];
    }
    //checks whether empty or not
    isEmpty()
    {
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }
    //prints the stack
    printStack()
    {
        var str="";
        for(var i=0;i<this.items.length;i++)
        {
            str+=this.items[i]+" ";
        }
        return str
    }

}
class Stack1 {

    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }

    stack() {

        this.first = new NodeLL(null, null);
        this.last = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return -1
        else return 1;
    }

    pop() {

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;
        return n;
    }

    push(e) {


        this.first = new NodeLL(e, this.first);
        this.count++;

    }

    peek(){

        if(this.first === null) return null;

        return this.first.ele;
    }

    printList(){

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
        }
        return str;
        
     }

}
class Queue
{
    constructor()
    {
        this.items=[]
    }
    //Functions to be implemented.
    //Entering the element at the end of the queue.
    enqueue(element)
    {
        this.items.push(element)
    }
    //Deleting the element at the front of the queue.
    dequeue()
    {
            if(this.isEmpty())
             return "Underflow";
        return this.items.shift();
    }
    //Returns the element at the front without deleting.
    front()
    {
            if(this.isEmpty())
             return "No elements in Queue";
        return this.items[0];

    }
    //Checks whether the queue is empty or not.
    isEmpty()
    {
        return this.items.length == 0;
    }
    //Converts the queue into a string.
    printQueue()
    {
            var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
    size()
    {
          return this.items.length;
    }
}
 
class Deque
{
    constructor()
    {
        this.items=[]
    }
    //Functions to be implemented.
    //Entering the element at the end of the queue.
    addFront(elements)
    {
        this.items.unshift(elements)
    }
    //adding elements to the end.
    addRear(elements)
    {
        this.items.push(elements)
    }
    //Deleting the element at the front of the queue.
    removeFront()
    {
            if(this.isEmpty())
             return "Underflow";
            return this.items.shift();
    }
    //Deleting items from the end.
    removeRear()
    {
        if(this.isEmpty())
             return "Underflow";
        return this.items.pop();
    }
    //Returns the element at the front without deleting.
    front()
    {
            if(this.isEmpty())
             return "No elements in Queue";
        return this.items[0];

    }
    //Checks whether the queue is empty or not.
    isEmpty()
    {
        return this.items.length == 0;
    }
    //Converts the queue into a string.
    printDeque()
    {
            var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
    size()
    {
          return this.items.length;
    }
}
class Queue1 {

    constructor() {
        this.first = null;
        this.rear = null;
        this.count = 0;
    }

    queue() {

        this.first = new NodeLL(null, null);
        this.rear = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return true
        else return false;
    }

    enqueue(e) {

        if (this.first === null) {

            this.first = new NodeLL(e, null);
            this.rear = this.first;
            this.count++;
            return;
        }

        this.rear.next = new NodeLL(e, null);
        this.rear = this.rear.next;
        this.count++;
        
    }

    dequeue(){

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;

        return n;

    }
    front(){
        return this.first.ele;
    }

    printList(){

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
        }
        return str;
        
     }
    }

module.exports = {
    unordered : function(str)
    {
        var fs=require('fs');
        var text=fs.readFileSync('read.txt','utf8');
        var arr=[];
        arr=text.split(" ");
        var list = new LinkedList();
        for(var i=0;i<arr.length;i++)
            {
                list.add(arr[i]);
            }
          
        var str1=list.search(str);
                if(str1===null)
                {
                    console.log("Not found!!");
                    list.add(str);  
                    fs.appendFile('read.txt', " "+str, function (err) {
                        if (err) {
                          console.log("Append failed");// append failed
                        } else {
                          console.log("Added to the list succcessfully!!");
                          console.log("Saved to the file!!");// done
                        }
                      })
                }
                else
                {
                    console.log("Found!!")
                    list.removeElement(str); 
                    var str2=list.toString(); 
                    //console.log(str2);
                    fs.writeFile('read.txt', str2, function(err) {
                        if (err) 
                        console.log(err);
                        else{
                            console.log("Removed from the list succcessfully!!");
                            console.log("Saved to file!!");
                        }   
                    })    
                }     
            
       list.printList();
       
        


    },
    ordered : function(str1){
        var fs=require('fs');
        var text=fs.readFileSync('read1.txt','utf8');
        //var arr=[];
        var arr1=[];
        arr1=text.split(" ");
        var list = new LinkedList();
        for(var i=0;i<arr1.length;i++)
        {
           // arr[i]=Number(arr1[i]);
           list.add1(Number(arr1[i]));
        }
        //console.log(arr);
        //arr=text.split(" ");
        
        // for(var j=0;j<arr.length;j++)
        // {
        //     list.add1(arr[j]);
        // }

        //console.log(list);
        list.printList();
        //for(var i=0;i<arr.length;i++)
            //{
              //  list.add1(arr[i]);
           // }
        var s=list.search1(str1);
        if(s==true){
                console.log("Found");
                list.removeElement1(str1);
                var str2=list.toString();
                fs.writeFileSync("read1.txt",str2);
               //console.log(str2);
                //fs.writeFile('read1.txt', str2, function(err){
                //    if (err) 
                 //   console.log(err);
                 //   else{
                //        console.log("Removed from the list succcessfully!!");
                 //       console.log("Saved to file!!");
               // }
           // });   
        }
        
        else{
            console.log("Not found");
            list.add1(str1);
            var str3= list.toString();
            fs.writeFileSync("read1.txt",str3);
            //fs.writeFile('read1.txt', str2, function(err){
             //   if (err) {
             //     console.log("Append failed");// append failed
             //   } else {
               //   console.log("Added to the list succcessfully!!");
                //  console.log("Saved to the file!!");// done
               // }
           // });
            
        }
        list.printList();
        process.exit();
        
    },
    stack : function(exp){
            var arr=[];
            var x;
            arr.length=exp.length;
            var stack1=new Stack();
            for(var i=0;i<arr.length;i++)
                {
                    arr[i]=exp.charAt(i);
                    if(arr[i]=='('||arr[i]=='['||arr[i]=='{'){
                        stack1.push(arr[i]);
                        continue;
                    }   
                        switch(arr[i])
                            {  case ')':        // Store the top element in a
                                x = stack1.peek();
                                if (x=='{' || x=='[')
                                    break;
                                else stack1.pop();
                                break;
                                case '}':      // Store the top element in b
                                x = stack1.peek();
                                if (x=='(' || x=='[')
                                    break;
                                else stack1.pop();
                                break;
                                case ']':     // Store the top element in c
                                x = stack1.peek();
                                if (x =='(' || x == '{')
                                    break;
                                else stack1.pop();
                                break;
                                            
                            }
                }
            if(stack1.isEmpty()){
                console.log("Your expression is balanced");
            }
            else{
                console.log("The remaining element in the stack"+stack1.printStack());
                console.log("Your expression is not balanced");
            }  
        
    },
    queue : function(number)
    {   var read = require('readline-sync');
        var arr=[];
        var queue1=new Queue();
        var i=0;
        while(i<number){
            var name=read.question(`Enter the person ${i} name:  `);
            queue1.enqueue(name);
            var amount=read.question(`Enter the amount existing in person ${i} account: `)
            var name1=queue1.front();
            arr.push(amount);
            var action=read.question('You want to deposit or withdraw money: ');
            var money=read.question('Enter the amount: ');
            if(action == 'deposit')
            {
                arr[i]=Number(arr[i])+Number(money);
                console.log("Money is added successfully!!");
                console.log("Total amount in account for person "+name1+" : "+arr[i]);
                queue1.dequeue();
            }
            else{
                arr[i]=Number(arr[i])-Number(money);
                try{
                    if(Number(arr[i])<0) throw "Insufficient balance"
                    console.log("Money is deducted successfully!!");
                    console.log("Money left in account for person "+name1+" : "+arr[i]);
                    queue1.dequeue();
                    queue1.dequeue();
                }
                catch(err){
                    console.log(err);
                }   
            }
            i++;
        }
        process.exit();
    },
    palindrome : function(string)
    {
        var s1=string;
        var deque=new Deque();
        for(var i=s1.length-1;i>=0;i--)
        {
            deque.addRear(s1.charAt(i));
            //console.log(deque.printDeque());
            
        }
        var string1="";
        for(var j=0;j<s1.length;j++)
        {
            var s=deque.front()
            string1=string1+s;
            //console.log(deque.printDeque());
            deque.removeFront();
        }
        
        if(s1==string1){
            console.log("The string is a palindrome!!");
        }
        else {
            console.log("The string is not a palindrome!!");
        }
    },
    prime2D : function (min,max) {
        var flag, i, prime = [], arr = [], array = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [];

        for (i = min; i < max; i++)      //outer for loop starts
        {
            flag = 1;
            for (var j = 2; j <= i / 2; j++)   //inner for loop starts 
            {
                if (i % j === 0) {
                    flag = 0;
                    break;
                }
            }       //inner for loop ends
            if (flag === 1) {
                prime.push(i);
            }
        }
        var str = "";
        for (var x = 0; x < prime.length; x++) {
            if (prime[x] > 0 && prime[x] <= 100) {
                str = prime[x] + " ";
                arr.push(str);
                str = "";
            }
            if (prime[x] > 100 && prime[x] <= 200) {
                str = " " + prime[x] + " ";
                arr1.push(str);
                str = "";
            }
            if (prime[x] > 200 && prime[x] <= 300) {
                str = " " + prime[x] + " ";
                arr2.push(str);
                str = "";
            }
            if (prime[x] > 300 && prime[x] <= 400) {
                str = " " + prime[x] + " ";
                arr3.push(str);
                str = "";
            }
            if (prime[x] > 400 && prime[x] <= 500) {
                str = " " + prime[x] + " ";
                arr4.push(str);
                str = "";
            }
            if (prime[x] > 500 && prime[x] <= 600) {
                str = " " + prime[x] + " ";
                arr5.push(str);
                str = "";
            }
            if (prime[x] > 600 && prime[x] <= 700) {
                str = " " + prime[x] + " ";
                arr6.push(str);
                str = "";
            }
            if (prime[x] > 700 && prime[x] <= 800) {
                str = " " + prime[x] + " ";
                arr7.push(str);
                str = "";
            }
            if (prime[x] > 800 && prime[x] <= 900) {
                str = " " + prime[x] + " ";
                arr8.push(str);
                str = "";
            }
            if (prime[x] > 900 && prime[x] <= 1000) {
                str = " " + prime[x] + " ";
                arr9.push(str);
                str = "";
            }

        }
        //array=arr+arr1+arr2+arr3+arr4+arr5+arr6+arr7+arr8+arr9;
        array.push(arr);
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        console.log("[0-100: " + array[0] + '\n' + "100-200: " + array[1] + '\n' + "200-300: " + array[2] + '\n' + "300-400: " + array[3] + '\n' + "400-500: " + array[4] + '\n' + "500-600: " + array[5] + '\n' + "600-700: " + array[6] + '\n' + "700-800: " + array[7] + '\n' + "800-900: " + array[8] + '\n' + "900-1000: " + array[9] + "]");
        //console.log(array);
    },
    extended : function(min,max){
        var i,flag,prime=[],anagram=[],notAnagram=[],j,n,n1;
        var arr=[];
        for(i=min;i<max;i++)
        {   flag=1;
            for(j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    flag=0;
                    break;
                }
                
            }
            if(flag==1)
                {
                    prime.push(i);
                }
        }
       for(n=0;n<prime.length;n++){
           for(n1=n+1;n1<prime.length;n1++){
            var flag=1;
            var str=prime[n];
            var str1=prime[n1];
            var str2=str.toString().split('').sort().join('');
            str1=str1.toString().split('').sort().join('');
            
            if(str2!==str1)
            {
               flag=0;
               
            }
            if(flag==1)
            {
                if(prime[n]!==prime[n1])
            {
                anagram.push(prime[n]+","+prime[n1]);
            }
                else continue;
            }
            
         }
         if(flag==0)
         {
             notAnagram.push(str);
         }
        
       
    }
       arr.push(anagram);
       arr.push(notAnagram);
       console.log("Anagram: "+arr[0]+ '\n'+"Not Anagram: "+arr[1]);

        // for(k=0;k<anagram.length;k++){
        //     console.log(anagram[k]);
        // }

    },
    primeCheck: function (min,max) {

        var arr = [];
        for (var j = min; j < max; j++) {

            var flag = false;
            for (var k = 2; k <= j / 2; k++) {

                if (j % k === 0) {
                    flag = true;
                }

            }
            if (flag === false) { //console.log(i);
                arr.push(j);
            }
        }
        return arr;

    },
     
anagramPrimeCheck: function (arr) {


        var a1 = [];

        for (var i = 0; i <= arr.length - 1; i++) { //nested for loop
            for (var j = i + 1; j < arr.length; j++) { //i+1 to avoid the avoid comparision with number it self
                var s1 = '' + parseInt(arr[i]); //converting each element into string  
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) { //check for anagram

                    // arr1.push(parseInt(s1)); 
                    a1.push(parseInt(s1)+","+parseInt(s2)+" ");
                    //a1.push(parseInt(s2)); //pushing all anagram element into an array
                }


            }
        }
        return a1;

    },
    anagramStack: function (a2) {

        var objstack = new Stack1();

        for (var i = 0; i < a2.length; i++) {

            objstack.push(a2[i]);
        }

        console.log(objstack.printList());
    },

    anagramQueue: function (a2) {

        var objqueue = new Queue1();

        for (var i = 0; i < a2.length; i++) {

            objqueue.enqueue(a2[i]);
        }

        console.log(objqueue.printList());
    },
    calender : function(month,year)
    {
        var numberOfDays = new Date(year, month, 0).getDate();
        var dateObj=new Date();
        dateObj.setFullYear(year);
        dateObj.setMonth(month-1);
        dateObj.setDate(1);
        var day=dateObj.getDay();
        //console.log(day);
        //console.log(numberOfDays);
        var dateArr=[]
        var days=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var days1=[],days2=[],days3=[],days4=[],days5=[];
        switch(day)
        {
            case 0: 
            break;
            case 1: days1.unshift(" ");
            break;
            case 2: days1.unshift(" "," ");
            break;
            case 3: days1.unshift(" "," "," ");
            break;
            case 4:days1.unshift(" "," "," "," ");
            break;
            case 5:days1.unshift(" "," "," "," "," ");
            break;
            case 6:days1.unshift(" "," "," "," "," "," ");
            break;
        }
        var n=1;
        for(var a=day;a<7;a++)
        { 
                days1[a]=n;
                n++;   
        }
        n=days1[6]+1;
        for(var a1=0;a1<7;a1++)
        {
            days2.push(n);
            n++;
        }
        n=days2[6]+1;
        for(var a1=0;a1<7;a1++)
        {
            days3.push(n);
            n++;
        }
        n=days3[6]+1;
        for(var a1=0;a1<7;a1++)
        {
            days4.push(n);
            n++;
        }
        n=days4[6]+1;
        for(var a1=0;a1<7;a1++)
        {
            if(n<=numberOfDays){
                days5.push(n);
                n++;
            }
            else
            {
                days5.push(" ");
                
            }
           
        }
        var stringDayName="";
        var day1="";
        var day2="";
        var day3="";
        var day4="";
        var day5="";
        //var day6="";
        for(var i=0;i<days.length;i++){
            stringDayName=stringDayName+" "+days[i];
            day1=day1+"  "+days1[i]+" ";
            if(days2[i]>=10)
            day2=day2+" "+days2[i]+" ";
            else
            day2=day2+"  "+days2[i]+" ";
            if(days3[i]>=10)
            day3=day3+" "+days3[i]+" ";
            else
            day3=day3+"  "+days3[i]+" ";
            if(days4[i]>=10)
            day4=day4+" "+days4[i]+" ";
            else
            day4=day4+"  "+days4[i]+" ";
            if(days5[i]>=10)
            day5=day5+" "+days5[i]+" ";
            else
            day5=day5+"  "+days5[i]+" ";
            //day6=day6+" "+days6[i];
        }
        dateArr.push(stringDayName);
        dateArr.push(day1);
        dateArr.push(day2);
        dateArr.push(day3);
        dateArr.push(day4);
        dateArr.push(day5);
        if((month-1)=='0')
        console.log(" January"+" "+year);
        if((month-1)=='1')
        console.log(" February"+" "+year);
        if(month-1=='2')
        console.log(" March"+" "+year);
        if(month-1=='3')
        console.log(" April"+" "+year);
        if(month-1=='4')
        console.log(" May"+" "+year);
        if(month-1=='5')
        console.log(" June"+" "+year);
        if(month-1=='6')
        console.log(" July"+" "+year);
        if(month-1=='7')
        console.log(" August"+" "+year);
        if(month-1=='8')
        console.log(" September"+" "+year);
        if(month-1=='9')
        console.log(" October"+" "+year);
        if(month-1=='10')
        console.log(" November"+" "+year);
        if(month-1=='11')
        console.log(" December"+" "+year);
        for(var j=0;j<dateArr.length;j++){
            console.log(dateArr[j]+'\n');
        }
    },
    queueCalender : function(month,year){
        var numberOfDays = new Date(year, month, 0).getDate();
        var dateObj=new Date(); 
        dateObj.setFullYear(year);
        dateObj.setMonth(month-1);
        dateObj.setDate(1);
        var day=dateObj.getDay();
        // console.log(numberOfDays);
        // console.log(day);
        var queue=new Queue1();
        queue.enqueue("SUN");
        queue.enqueue("MON");
        queue.enqueue("TUE");
        queue.enqueue("WED");
        queue.enqueue("THU");
        queue.enqueue("FRI");
        queue.enqueue("SAT");
        switch(day)
        {
            case 0: 
            break;
            case 1: queue.enqueue(" ");
            break;
            case 2: queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 3: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 4: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 5: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 6: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
        }
        
        for(var i=1;i<=numberOfDays;i++){
            
            queue.enqueue(i);
            
        }
        var string="";
        var string1="";
        var string2="";
        var string3="";
        var string4="";
        var string5="";
        for(var j=0;j<7;j++){
          var n=queue.front();
          queue.dequeue();
          string=string+n+" ";
        }
        console.log(string);
        for(var j=0;j<7;j++){
            var n=queue.front();
            queue.dequeue();
            string1=string1+" "+n+"  ";
          }
          console.log(string1);
          for(var j=0;j<7;j++){
            var n=queue.front();
            queue.dequeue();
            if(n<10)
            string2=string2+" "+n+"  ";
            else
            string2=string2+" "+n+" ";

          }
          console.log(string2);
          for(var j=0;j<7;j++){
            var n=queue.front();
            queue.dequeue();
            if(n<10)
            string3=string3+" "+n+"  ";
            else
            string3=string3+" "+n+" ";

          }
          console.log(string3);
          for(var j=0;j<7;j++){
            var n=queue.front();
            queue.dequeue();
            if(n<10)
            string4=string4+" "+n+"  ";
            else
            string4=string4+" "+n+" ";
          }
          console.log(string4);
          for(var j=n+1;j<=numberOfDays;j++){
            var n=queue.front();
            queue.dequeue();
            if(n<10)
            string5=string5+" "+n+"  ";
            else
            string5=string5+" "+n+" ";
          }
          console.log(string5);
        // for(var j=1;j<=numberOfDays;j++)
        // {
        //     var n=0
        //     while(n!==((i%7)==0)){
        //         var n=queue.front();
        //           queue.dequeue();
        //           string=string+n+" ";
        //     }
        //     console.log(string);
        // }
        


    },
    stackCalender : function(month,year){
        var numberOfDays = new Date(year, month, 0).getDate();
        var dateObj=new Date(); 
        dateObj.setFullYear(year);
        dateObj.setMonth(month-1);
        dateObj.setDate(1);
        var day=dateObj.getDay();  
        var queue=new Queue1();
        queue.enqueue("SUN");
        queue.enqueue("MON");
        queue.enqueue("TUE");
        queue.enqueue("WED");
        queue.enqueue("THU");
        queue.enqueue("FRI");
        queue.enqueue("SAT"); 
        switch(day)
        {
            case 0: 
            break;
            case 1: queue.enqueue(" ");
            break;
            case 2: queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 3: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 4: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 5: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
            case 6: queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
                    queue.enqueue(" ");
            break;
        }
        for(var i=1;i<=numberOfDays;i++){
            
            queue.enqueue(i);
            
        }
        var stack=new Stack1();
        var stack1=new Stack1();
        for(var i=1;i<=(numberOfDays+day+7);i++)
        {
            var n=queue.front();
            queue.dequeue();
            stack.push(n);
        }
        for(var j=1;j<=(numberOfDays+day+7);j++)
        {
            var n1=stack.peek();
            stack.pop()
            stack1.push(n1);
        }
        // console.log(stack.printList());
         // console.log(stack1.printList());
         var string="";
        var string1="";
        var string2="";
        var string3="";
        var string4="";
        var string5="";
        for(var j=0;j<7;j++){
          var k=stack1.peek();
          stack1.pop();
          string=string+k+" ";
        }
        console.log(string);
        for(var j=0;j<7;j++){
            var k=stack1.peek();
            stack1.pop();
            string1=string1+" "+k+"  ";
          }
          console.log(string1);
          for(var j=0;j<7;j++){
            var k=stack1.peek();
            stack1.pop();
            if(k<10)
            string2=string2+" "+k+"  ";
            else
            string2=string2+" "+k+" ";

          }
          console.log(string2);
          for(var j=0;j<7;j++){
            var k=stack1.peek();
            stack1.pop();
            if(k<10)
            string3=string3+" "+k+"  ";
            else
            string3=string3+" "+k+" ";

          }
          console.log(string3);
          for(var j=0;j<7;j++){
            var k=stack1.peek();
            stack1.pop();
            if(k<10)
            string4=string4+" "+k+"  ";
            else
            string4=string4+" "+k+" ";
          }
          console.log(string4);
          if(month==2 && (year%400==0||(year%100!=0&&year%4==0))){
              var k1=numberOfDays+day+1;
          }
          else if(month==2){
              var k1=numberOfDays+day;
          }
          else{
              var k1=numberOfDays+day+3;
          }

          for(var j=n+1;j<=k1;j++){
            var k=stack1.peek();
            stack1.pop();
            if(k<10)
            string5=string5+" "+k+"  ";
            else
            string5=string5+" "+k+" ";
            // if(j>numberOfDays+day+7)
            // string5=" ";
            // if(k=="null")
            // {
            //     k=" ";
            // }
          
        } 
        console.log(string5);
    },
    binarySearchTrees:function(nodes)
        {
            var firstTerm = parseInt(2*nodes);
            var secondTerm =(1+nodes);
            var thirdTerm = nodes;
            var numberofBinarySearchTress = parseInt(this.factorial(firstTerm)/parseInt(this.factorial(secondTerm)*this.factorial(thirdTerm)));
            
                    
            return numberofBinarySearchTress;

        },
    factorial(n) 
        { 
            var res = 1;
            for (var i = 1; i <= n; ++i) 
            { 
                res *= i; 
            } 
        
            return res; 
        }
}
 
    




