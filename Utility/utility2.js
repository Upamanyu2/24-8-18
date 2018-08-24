module.exports={
    username : function(userinput)
    {
        if(userinput.length>=3)
        console.log("Hello "+ userinput+"! How are you");
        else
        console.log("Enter atleast 3 characters");
    }
}