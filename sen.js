var x=2,t=-1;

console.log(exponente(3))


function exponente(v)
{
    var e=1,f=3,p=3;
    for(i=1;i<=v;i++)
    {

        if(t>0)
        {
            p*=i;
            e+=Math.pow(x,f)/p;
            t*=-1;
            p=+2;
            f=+2;
        }
        else
        {
            p*=i;
            e-=Math.pow(x,f)/p;
            t*=-1;
            p+=2;
            f+=2;
            
        }

    }
    return e;
}