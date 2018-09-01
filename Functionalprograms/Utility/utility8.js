const _= require("lodash")
module.exports={
    
    coupon : function(min, max)
    {
        var random=[],i,n;
        for(i=min;i<max;i++)
        {
            n=_.random(min, max);
            random.push(n);
        }
        console.log(random);
        console.log("No of coupon generated: "+random.length);
        var distinct=new Set(random);
        console.log(distinct);
        console.log("number of distinct coupons: "+[...distinct].length);
    }
}
