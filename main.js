const nome=[], lanche=[], bebida=[];
let contador=0, qtdCliente;

qtdCliente = Number (prompt("Quantos clientes estão cadastrados?"))
do {
    nome[contador] = prompt("Digite seu nome");
lanche[contador] = (prompt("Informe seu lanche"));
bebida[contador] = (prompt("Informe sua bebida"));
contador++;
} while (contador != qtdCliente);

do {
    alert("Nome do cliente:" + nome + "\n Lanche:" + lanche + "\n Bebida:" + bebida);
    contador++;
} while (contador!=qtdCliente);