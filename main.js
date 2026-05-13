const nome=[], lanche=[], bebida=[];
let contador=0, qtdCliente;

qtdCliente = Number (prompt("Quantos clientes estão cadastrados?"))
do {
    nome[contador] = prompt("Digite seu nome");
lanche[contador] = (prompt("Informe seu lanche seguindo a tabela: X-Burguer | X-Egg | Misto Quente" ));
bebida[contador] = (prompt("Informe sua bebida: Refrigerante | Suco | Água"));
contador++;
} while (contador != qtdCliente);

do {
    alert("Nome do cliente:" + nome + "\n Lanche:" + lanche + "\n Bebida:" + bebida);
    contador++;
} while (contador!=qtdCliente);