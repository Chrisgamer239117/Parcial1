var v=0;

console.log(exponente(3))


function exponente(v)
{
    var e=1,f=1,p=1;
    for(i=1;i<=v;i++)
    {
        p*=i;
        e+=1/p
        f++;
    }
    return e;
}