N=parseInt(prompt("Entre com N"))
resultado=" "
for(i=1;i<=N;i++){
    if(N/i==divisaoInteira(N, i))
    resultado=resultado+i+" "
}alert(resultado)
