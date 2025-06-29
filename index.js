let nomeDoHeroi = "Jubileu da Sorte"
let quantidadeDeXp = 1002
let nivelDoHeroi = ""

if (quantidadeDeXp <= 1000){
    nivelDoHeroi = "Ferro"
} else if ((quantidadeDeXp >=1001) && (quantidadeDeXp <=2000)){
    nivelDoHeroi = "Bronze"
} else if ((quantidadeDeXp >=2001) && (quantidadeDeXp <=5000)){
    nivelDoHeroi = "Prata"
} else if ((quantidadeDeXp >=5001) && (quantidadeDeXp <=7000)){
    nivelDoHeroi = "Ouro"
} else if ((quantidadeDeXp >=7001) && (quantidadeDeXp <=8000)){
    nivelDoHeroi = "Platina"
} else if ((quantidadeDeXp >=8001) && (quantidadeDeXp <=9000)){
    nivelDoHeroi = "Ascendente"
} else if ((quantidadeDeXp >=9001) && (quantidadeDeXp <=10000)){
    nivelDoHeroi = "Imortal"
} else if (quantidadeDeXp >= 10001){
    nivelDoHeroi = "Radiante"
}

console.log ("O Herói " + nomeDoHeroi + " tem " + quantidadeDeXp + " de XP e está no nível " + nivelDoHeroi + ".")