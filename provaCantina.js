
let prompt = require('prompt-sync')();
let cantina = ['pastel','suco','bolo','chocolate','refrigerante'];
   
let estoque =[];
let limite_critico = 20;

console.log ('estoque inicial');
for (let i=0; i < cantina.length; i++) {

 do{
      quantidade = parseInt(prompt('digite a quantidade inicial de produtos' + cantina [i] )); 
    if (isNaN(quantidade)|| quantidade < 0){
        console.log('digite um numero positivo');
 }
 }while (isNaN(quantidade)|| quantidade < 0);
 estoque[i] = quantidade;
            }

          for  (let i=0; i < cantina.length; i++){
            if (estoque[i] < limite_critico) {
                console.log('alerta: estoque baixo de' + cantina[i]) 
            }
          }
           
          let opcao;
      
            console.log('===menu de opcao===')
            console.log('[1] => visualizar estoque')
            console.log('[2] => registrar estoque')
            console.log('[3] => repor estoque')
            console.log('[4] => sair')

            opcao = prompt(' escolha uma opcao: ' );
            
            
            switch(opcao){
                   
        case '1': 
            console.log('\n Estoque atual:');
            for (let i = 0; i < cantina.length; i++) {
                console.log(quantidade);
            }
            break

        case '2':
            let produtoVendidos= prompt('Digite o nome do produto vendido: ');
            let Vendas = cantina.indexOf(produtoVendidos);

            if (Vendas === 0) {
                console.log('Produto não encontrado!');
                break;
            }

            let qtd_de_Venda = parseInt(prompt('Quantidade vendida de '+ produtoVendidos));

            if (isNaN(qtd_de_Venda) || qtd_de_Venda <= 0) {
                console.log('Quantidade inválida');
            } else if (qtd_de_Venda > estoque[Vendas]) {
                console.log('Estoque insuficiente para a venda');
            } else {
                estoque[Vendas] = qtd_de_Venda;
                console.log(' Venda registrada.Estoque de' + produtoVendidos + 'agora é de'+( estoque -Vendas));
            }
            break;

        case '3':
            let produtos_Para_Repor = prompt("Digite o nome do produto para repor: ");
            let Repor = cantina.indexOf(produtos_Para_Repor);

            if (Repor === 0) {
                console.log('Produto não encontrado');
                break;
            }

            let qtdRepor = parseInt(prompt('Quantidade a adicionar em' + produtos_Para_Repor ));

            if (isNaN(qtdRepor) || qtdRepor <= 0) {
                console.log(' Quantidade inválida');
            } else {
                estoque[Repor] = qtdRepor;
                console.log(' Estoque de' + produtos_Para_Repor + 'atualizado para' + (estoque + Repor));
            }
            break;

        case '4':
            console.log('o programa foi encerrado');
            break;

        default:
            console.log('Operação inválida');
    }