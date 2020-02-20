var x,v=0;

console.log(exponente(2,3))


function exponente(x,v)
{
    var e=1,f=1,p=1;
    for(i=1;i<=v;i++)
    {
        p*=i;
        e+=(Math.pow(x,f)/p)
        f++;
    }
    return e;
}
