function high(x){
var arrABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var str,posi0=0,posi1=0,sum=0;
var palabra,p0=0,p1=0,puntos=0;
var i,j;
//console.log(x.length);
for(var i=0;i<x.length;i++){

  for(var j=0;j<arrABC.length;j++){//buscamos caracter
  //console.log(x[i]);
    if(x[i] == arrABC[j]){
      sum += j+1;
      //console.log('s:'+sum);
    }
  }
  
  if(puntos < sum){//guardamos la suma
    puntos = sum;
    
  }
  
  if(x[i] == " "){ //si encontramos un espacio
    posi1 = i;
    //console.log('p:'+puntos+'s:'+sum);
    //console.log('p0:'+posi0+'p1:'+posi1);
    if(puntos == sum){
      str = x.substring(posi0,posi1);
      //console.log(str);
    }
    sum = 0;
    posi0=i+1;
    
  }
}//for
 //si terminamos y sum es mayor que puntos eso implica que la ultima palabra era la mayor
    if(puntos == sum){
      posi1 = i;
      str = x.substring(posi0,posi1);
      console.log(str);
    }


return str;
}
