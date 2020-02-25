var x=2,s=0,serie=0,f=0,sum=0;


console.log(ser(3))
console.log(ser(19))
console.log(ser(300000))


function ser(v)
{
    for(i=1;i<=v;i++)
    {    
        s=(x-1)/x;
        f=1/i;
        sum=Math.pow(s,i)
        serie+=f*sum;
    }
    return serie;
}    
