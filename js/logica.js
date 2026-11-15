// GUI Luxury — atividade de lógica JavaScript (Aulas 09 e 10).
"use strict";

// A lista "produtos" é definida em main.js, carregado antes deste arquivo.
// Cada item tem nome, preço, categoria, estoque e descrição.

// Classifica preços em três faixas com uma cadeia if / else if / else.
function classificarFaixaPreco(preco) {
  if (preco <= 250) {
    return "Essencial";
  } else if (preco <= 350) {
    return "Clássico";
  } else {
    return "Exclusivo";
  }
}

// O switch associa cada categoria a um rótulo de apresentação.
function nomeCategoriaLogica(categoria) {
  let nome;
  switch (categoria) {
    case "Feminino":
      nome = "Feminina";
      break;
    case "Masculino":
      nome = "Masculina";
      break;
    case "Unissex":
      nome = "Unissex";
      break;
    default:
      nome = "Categoria não identificada";
      break;
  }
  return nome;
}

// Processa a lista sem modificar o array recebido.
function resumirProdutosLogica(lista = produtos) {
  const valorTotal = lista.reduce(function (acumulado, produto) {
    return acumulado + produto.preco;
  }, 0);

  const quantidadeEstoque = lista.reduce(function (acumulado, produto) {
    return acumulado + produto.estoque;
  }, 0);

  return {
    quantidade: lista.length,
    valorTotal: valorTotal,
    quantidadeEstoque: quantidadeEstoque
  };
}

// Monta a lista na página usando createElement, textContent, append e classList.
function mostrarProdutosLogica(lista, limite) {
  const areaResultado = document.getElementById("resultadoLogica");
  const listaVisual = document.createElement("ul");

  if (lista.length === 0) {
    areaResultado.textContent = `Nenhum perfume custa até ${limite.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.`;
    return;
  }

  // Primeiro padrão: for com índice para acessar cada posição do array.
  const linhasConsole = [];
  for (let indice = 0; indice < lista.length; indice++) {
    const produto = lista[indice];
    linhasConsole.push({
      perfume: produto.nome,
      categoria: nomeCategoriaLogica(produto.categoria),
      preco: produto.preco,
      faixa: classificarFaixaPreco(produto.preco)
    });
  }

  // Segundo padrão: for...of para percorrer os objetos diretamente e somar estoque.
  let unidadesEmEstoque = 0;
  for (const produto of lista) {
    unidadesEmEstoque += produto.estoque;

    const item = document.createElement("li");
    const faixa = classificarFaixaPreco(produto.preco);
    item.textContent = `${produto.nome} — ${nomeCategoriaLogica(produto.categoria)} — ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} — ${faixa}`;
    item.classList.add(`faixa-${faixa.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`);
    listaVisual.append(item);
  }

  // while percorre as três categorias e atualiza o índice em cada volta.
  const categorias = ["Feminino", "Masculino", "Unissex"];
  const contagemCategorias = {};
  let indiceCategoria = 0;
  while (indiceCategoria < categorias.length) {
    const categoriaAtual = categorias[indiceCategoria];
    contagemCategorias[categoriaAtual] = lista.filter(function (produto) {
      return produto.categoria === categoriaAtual;
    }).length;
    indiceCategoria++;
  }

  const resumo = resumirProdutosLogica(lista);
  const resumoTexto = document.createElement("p");
  resumoTexto.textContent = `Foram encontrados ${resumo.quantidade} perfumes até ${limite.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}. Valor somado: ${resumo.valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}. Unidades em estoque: ${unidadesEmEstoque}.`;

  areaResultado.replaceChildren(listaVisual, resumoTexto);
  console.table(linhasConsole);
  console.log(`Análise concluída: ${resumo.quantidade} fragrâncias, ${unidadesEmEstoque} unidades em estoque.`);
  console.log("Contagem por categoria:", contagemCategorias);
}

// Teste de mesa documentado (limite = R$ 350,00):
// Volta 1: Rose Élégance (319,90) -> Clássico; total de itens = 1.
// Volta 2: Noir Intense (349,90) -> Clássico; total de itens = 2.
// Volta 3: Golden Hour (289,90) -> Clássico; total de itens = 3.
// A saída do console.table deve mostrar os mesmos nomes e faixas dessas três voltas.

const botaoAnaliseLogica = document.getElementById("executarAnaliseLogica");
if (botaoAnaliseLogica) {
  botaoAnaliseLogica.addEventListener("click", function () {
    // A entrada do prompt é texto; Number converte antes de qualquer comparação.
    const entrada = window.prompt("Qual o preço máximo que deseja considerar? (Ex.: 350)");
    if (entrada === null || entrada.trim() === "") {
      document.getElementById("resultadoLogica").textContent = "Análise cancelada. Informe um valor para continuar.";
      return;
    }

    const limite = Number(entrada);
    if (!Number.isFinite(limite) || limite < 0 || limite > 10000) {
      window.alert("Digite um número válido entre 0 e 10.000.");
      return;
    }

    const selecionados = produtos.filter(function (produto) {
      return produto.preco <= limite;
    });

    // Menu opcional com do...while: a condição é atualizada a cada escolha.
    let opcao = "";
    do {
      opcao = window.prompt("GUI LUXURY — ANÁLISE\n1 — Listar perfumes encontrados\n2 — Mostrar resumo\n3 — Sair") ?? "3";

      switch (opcao) {
        case "1":
          mostrarProdutosLogica(selecionados, limite);
          break;
        case "2": {
          const resumo = resumirProdutosLogica(selecionados);
          const mensagem = `Resumo: ${resumo.quantidade} perfumes; valor total ${resumo.valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}; estoque somado ${resumo.quantidadeEstoque} unidades.`;
          document.getElementById("resultadoLogica").textContent = mensagem;
          console.log(mensagem);
          break;
        }
        case "3":
          document.getElementById("resultadoLogica").textContent = "Análise finalizada. Obrigado por explorar a GUI Luxury!";
          break;
        default:
          window.alert("Opção inválida. Escolha 1, 2 ou 3.");
          break;
      }
    } while (opcao !== "3");
  });
}

// Teste rápido das funções com mais de um valor antes da interação com a página.
console.table([classificarFaixaPreco(199.90), classificarFaixaPreco(319.90), classificarFaixaPreco(389.90)]);
