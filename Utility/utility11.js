module.exports = {
    calculate : function(a, b, c)
    {
        var delta=b*b-4*a*c;
        if(delta > 0)
        {
        var Root1=(-b+Math.sqrt(delta))/(2*a);
        var Root2=(-b-Math.sqrt(delta))/(2*a);
        console.log("The root 1 is: "+ Root1);
        console.log("The root 2 is: "+ Root2);
        }
        else if(delta == 0)
        {
            Root1=Root2=-b/(2*a);
            console.log("The value of root 1 and root 2 is: "+Root1);
        }
        else {
            var realPart=-b/(2*a);
            var imaginaryPart=Math.sqrt(-delta)/(2*a);
            console.log("Value of root 1: " + realPart + imaginaryPart+"i");
            console.log("Value of root 2: "+ realPart -  imaginaryPart+"i");
        }
    }
}