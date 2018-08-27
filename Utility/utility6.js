module.exports = {
    factor : function(number){
        while(number%2==0)
        {
            console.log(2+" ");
            number=number/2;
        }
        {
            
        for(var i=3;i<=Math.sqrt(number);i=i+2)
        {
            while(number%i==0)
            {
                console.log(i+" ");
                number=number/i;
            }

        }
        if(number>2)
        {
            console.log(number);
        }
    }

}
}
