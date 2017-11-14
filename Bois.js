var num, peso, nBois, media, maisPesado, maisLeve, soma, iMaisPesado, iMaisLeve;
soma=0;
num=parseFloat(prompt("Digite a quantidade de bois: "));

for (i=1; i<num; i++) {
    nBois=parseFloat(prompt("Digite o número do boi: "));
    peso=parseFloat(prompt("Digite o peso do boi: "));
    soma = soma + peso;
    if (peso > maisPesado) {
        maisPesado=peso;
        iMaisPesado= i;
        
        if (peso > maisLeve) {
            maisLeve=peso;
            iMaisLeve= i;
        }
    }
}
media = peso/num;
alert ("Media: " + media + " " + "Mais pesado: " + maisPesado + " " + "Mais leve: " + maisLeve)
