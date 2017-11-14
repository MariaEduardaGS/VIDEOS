//Lista 4.1(Repetição Contada)
//13.Implemente um programa que faça uma contagem de 222 a 555 (inclusive). 
//O programa deve contar de 3 em 3 para números menores ou iguais a 300,
//de 4 em 4 no intervalo aberto de 300 a 400 e de 5 em 5 para valores maiores
//ou iguais a 400.
//Link para o vídeo YouTube: https://youtu.be/M6-oaNLrOUY
var cont1=0, cont2=0, cont3=0;
for(i=222;i<=300;i+=3){
    cont1++;
}
alert("Existem "+cont1+" elementos no primeiro intervalo(de 3 em 3).");

for(j=301;j<400;j+=4){
    cont2++;
}
alert("Existem "+cont2+" elementos no segundoo intervalo(de 4 em 4).");
for(k=400;k<=555;k+=5){
    cont3++;
}
alert("Existem "+cont3+" elementos no terceiro intervalo(de 5 em 5).");
