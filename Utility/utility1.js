
module.exports={

    data : function(userinput)
    {
        var persons=[];
        persons.push({id:'upa', name:'upamanyu'});
        persons.push({id:'anime', name:'animesh'});
        persons.push({id:'ray', name:'rajesh'});
       
       
           for(i=0;i<persons.length;i++)
           {
            if(userinput==persons[i].id)
               console.log(persons[i].id +" " +persons[i].name);
           }
       
        

  }, 

  username : function(userinput)
    {
        if (userinput.length>=3)
        this.data(userinput);
        else
        console.log("Enter atleast 3 characters");
       
    

  }
}