
race();
function race()
{
    var Flash=0,Sonic=0,t=-1,ft=0,st=0;
    do{
        var num =dado();
        if(num==6)
        {   
            var p=3;
            if(t>0)
            {
                Flash+=p;
                console.log("Avanza Flash: "+p)
                t*=-1
                ft+=p;
            }else
            {
                console.log("Avanza Sonic: "+p)
                Sonic+=p;
                t*=-1;
                st+=p;  
            } 
        }else 
        {   
            if(num==5||num==4){
                var p=1;
                if(t>0)
                {
                    Flash+=p;
                    console.log("Avanza Flash: "+p)
                    t*=-1;
                    ft+=p;
                }else
                {
                    console.log("Avanza Sonic: "+p)
                    Sonic+=p;
                    t*=-1;
                    st+=p;  
                }
            }else
            {    
                if(num==3||num==2||num==1)
                {
                    var p=2;
                    if(t>0)
                    {
                        Flash+=p;
                        console.log("Avanza Flash: "+p)
                        t*=-1;
                        ft+=p;
                    }else
                    {
                        console.log("Avanza Sonic: "+p)
                        Sonic+=p;
                        t*=-1;
                        st+=p;   
                    } 
                }
            }
        }                     
    }while(Flash!=100 && Sonic!=100 )
    console.log("Flash avanzo "+ft)
    console.log("Sonic avanzo "+st)
    if(Sonic==100)
    {
        console.log("El Ganador es: Sonic");
    }
    else
    {
        console.log("El Ganador es: Flash");
    }
    
}

function dado()
{
       var num =Math.floor(Math.random()*6+1);
       return num;
}


