let cos=1, s=3, x=2, n=2, m=-1;

sen=x;
for(let i=0;i<s;i++)
{
    cos+=(Cos(x,n)*m);
    m*=-1;
    n+=2;
}

console.log("El resultado de la serie de cos es: " + cos)
function Cos(x,n)
{
    var e=0, fac=1;

    e=Math.pow(x,n)

    for(let i=1;i<=n;i++)
    {
        fac*=i;
    }

    return (e/fac);
}