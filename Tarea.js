class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    areaRectangulo(){
        return this.base*this.altura;
    }
}
const btn=document.getElementById("btnRectangulo");
btn.addEventListener('click',()=>{
    
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
   
    base=parseInt(base);
    altura=parseInt(altura);
    
    let altura=parseInt(document.getElementById("altura").value);
    
    let rect1=new Rectangulo (base,altura);
    
    let divRes=document.getElementById("resultados");
    
    divRes.innerHTML="<p>rectangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    
    divRes.innerHTML+="<p>con un area de " + rect1.areaRectangulo() + "</p>";
});

class Cuadrado{
    constructor(lado){
        this.lado=lado;
        
    }
    areaCuadrado(){
        return this.lado*this.lado*this.lado;
    }
}
const btn=document.getElementById("btnCuadrado");
btn.addEventListener('click',()=>{
    
    let base=document.getElementById("lado").value;
    l
 
    
    lado=parseInt(lado);
    
    
    let altura=parseInt(document.getElementById("lado").value);
    
    let cuad1=new Cuadrado (base,altura);
    
    let divRes=document.getElementById("resultados");
    
    divRes.innerHTML="<p>Cuadrado con lado " + cuad1.base;
    
    divRes.innerHTML+="<p>con un area de " + cuad1.areaCuadrado() + "</p>";
});

class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    areaTriangulo(){
        return this.base*this.altura/2;
    }
}
const btn=document.getElementById("btnTriangulo");
btn.addEventListener('click',()=>{
    
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    
    base=parseInt(base);
    altura=parseInt(altura);
    
    let altura=parseInt(document.getElementById("altura").value);
    
    let rect1=new Triangulo (base,altura);
    
    let divRes=document.getElementById("resultados");
    
    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    
    divRes.innerHTML+="<p>con un area de " + rect1.areaTriangulo() + "</p>";
});


