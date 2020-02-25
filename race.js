var BMW=0,ferrari=0,t=1;
console.log("El Ganador es : "+ race());
function race()
{
    do{
        var num =Math.floor(Math.random()*6+1);
        if(num==6)
        {   
            var p=3;
            if(t>0)
            {
                BMW+=p;
                console.log("Avanza BMW: "+p)
                t*=-1
            }else
            {
                console.log("Avanza ferrari: "+p)
                ferrari+=p;
                t*=-1;  
            } 
        }else 
        {   
            if(num==5||num==4){
                var p=1;
                if(t>0)
                {
                    BMW+=p;
                    console.log("Avanza BMW: "+p)
                    t*=-1
                }else
                {
                    console.log("Avanza ferrari: "+p)
                    ferrari+=p;
                    t*=-1;  
                }
            }else
            {    
                if(num==3||num==2||num==1)
                {
                    var p=2;
                    if(t>0)
                    {
                        BMW+=p;
                        console.log("Avanza BMW: "+p)
                        t*=-1
                    }else
                    {
                        console.log("Avanza ferrari: "+p)
                        ferrari+=p;
                        t*=-1;  
                    } 
                }
            }
        }                     
    }while(BMW!=100 && ferrari!=100 )
    if(ferrari==100)
    {
        console.log("El Ganador es: ferrari");
    }
    else
    {
        console.log("El Ganador es: BMW");
    }

}