U=parseInt(prompt(""))
resultado=" "
for(i=0;i<U;i++){
    if(i==0)
        resultado=resultado+"1"+" "
    else
       resultado=resultado+"1/"+ potencia(2,i)+" "
    
}alert(resultado)
