// GUI Luxury — catálogo, filtros e análise de dados.
"use strict";

// Dados fictícios para fins acadêmicos. Cada item possui nome, preço,
// categoria, estoque e descrição para alimentar o catálogo e os resumos.
const produtos = [
  { nome: "Rose Élégance", preco: 319.90, categoria: "Feminino", estoque: 8, descricao: "Notas florais delicadas com um toque sofisticado.", imagem: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80" },
  { nome: "Noir Intense", preco: 349.90, categoria: "Masculino", estoque: 3, descricao: "Uma composição amadeirada, intensa e marcante.", imagem: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=80" },
  { nome: "Golden Hour", preco: 289.90, categoria: "Unissex", estoque: 0, descricao: "Aroma envolvente para acompanhar bons momentos.", imagem: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80" },
  { nome: "Jardin Blanc", preco: 259.90, categoria: "Feminino", estoque: 12, descricao: "Leveza cítrica e frescor para todos os dias.", imagem: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80" },
  { nome: "Bois Royal", preco: 389.90, categoria: "Masculino", estoque: 5, descricao: "Madeiras elegantes com personalidade e presença.", imagem: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80" }
];

// Elementos usados em mais de uma função ficam reunidos aqui.
const gradeProdutos = document.getElementById("gradeProdutos");
const campoBusca = document.getElementById("buscaProdutos");
const filtroCategoria = document.getElementById("filtroCategoria");
const campoPrecoMaximo = document.getElementById("precoMaximo");
const semResultados = document.getElementById("semResultados");

// Converte um valor numérico para o padrão monetário brasileiro.
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// Classifica a disponibilidade com faixas de estoque.
function classificarEstoque(quantidade) {
  if (quantidade === 0) {
    return "Esgotado";
  } else if (quantidade <= 3) {
    return "Últimas unidades";
  } else {
    return "Disponível";
  }
}

// Define um texto curto para cada categoria usando switch.
function descreverCategoria(categoria) {
  switch (categoria) {
    case "Feminino":
      return "Feminino";
    case "Masculino":
      return "Masculino";
    case "Unissex":
      return "Unissex";
    default:
      return "Outras fragrâncias";
  }
}

// Cria os cards com métodos do DOM e textContent para inserir os dados.
function criarCard(produto) {
  const artigo = document.createElement("article");
  artigo.className = "produto";

  const imagemArea = document.createElement("div");
  imagemArea.className = "produto-imagem";

  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = "Frasco de perfume " + produto.nome;
  imagem.loading = "lazy";
  imagem.onerror = function () {
    imagem.src = "assets/images/perfume-ilustracao.svg";
  };

  const etiqueta = document.createElement("span");
  etiqueta.className = "produto-etiqueta";
  etiqueta.textContent = classificarEstoque(produto.estoque);

  imagemArea.append(imagem, etiqueta);

  const informacoes = document.createElement("div");
  informacoes.className = "produto-info";

  const categoria = document.createElement("p");
  categoria.className = "produto-categoria";
  categoria.textContent = descreverCategoria(produto.categoria);

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  const descricao = document.createElement("p");
  descricao.className = "produto-descricao";
  descricao.textContent = produto.descricao;

  const rodape = document.createElement("div");
  rodape.className = "produto-rodape";

  const preco = document.createElement("strong");
  preco.className = "produto-preco";
  preco.textContent = formatarPreco(produto.preco);

  const estoque = document.createElement("span");
  estoque.className = "produto-estoque";
  estoque.textContent = produto.estoque + " em estoque";

  rodape.append(preco, estoque);

  const acoes = document.createElement("div");
  acoes.className = "produto-acoes";

  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = "Tenho interesse";
  botao.disabled = produto.estoque === 0;
  botao.setAttribute("aria-label", "Consultar " + produto.nome + " pelo WhatsApp");
  botao.addEventListener("click", function () {
    abrirWhatsApp("Olá! Tenho interesse no perfume " + produto.nome + ". Pode me passar mais informações?");
  });

  if (produto.estoque === 0) {
    botao.textContent = "Produto esgotado";
    botao.disabled = true;
  }

  acoes.append(botao);
  informacoes.append(categoria, titulo, descricao, rodape, acoes);
  artigo.append(imagemArea, informacoes);

  return artigo;
}

// Aplica busca e categoria antes de atualizar a grade.
function renderizarProdutos(lista) {
  const fragmento = document.createDocumentFragment();

  lista.forEach(function (produto) {
    fragmento.appendChild(criarCard(produto));
  });

  gradeProdutos.replaceChildren(fragmento);
  semResultados.hidden = lista.length > 0;
}

function filtrarProdutos() {
  const termo = campoBusca.value.trim().toLocaleLowerCase("pt-BR");
  const categoriaSelecionada = filtroCategoria.value;
  // A entrada chega como texto; Number converte o valor para comparação numérica.
  const precoDigitado = Number(campoPrecoMaximo.value);
  const temLimiteDePreco = campoPrecoMaximo.value.trim() !== "" && Number.isFinite(precoDigitado);

  const resultado = produtos.filter(function (produto) {
    const correspondeNome = produto.nome.toLocaleLowerCase("pt-BR").includes(termo);
    const correspondeCategoria = categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada;
    const correspondePreco = !temLimiteDePreco || produto.preco <= precoDigitado;
    return correspondeNome && correspondeCategoria && correspondePreco;
  });

  renderizarProdutos(resultado);
}

// Preenche a tabela com os mesmos dados usados nos cards.
function preencherTabela() {
  const corpo = document.getElementById("tabelaProdutos");
  const linhas = produtos.map(function (produto) {
    const linha = document.createElement("tr");
    const valores = [
      produto.nome,
      produto.categoria,
      formatarPreco(produto.preco),
      classificarEstoque(produto.estoque)
    ];

    valores.forEach(function (valor) {
      const celula = document.createElement("td");
      celula.textContent = valor;
      linha.appendChild(celula);
    });

    return linha;
  });

  corpo.replaceChildren(...linhas);
}

// Resumo do catálogo: map, filter e reduce trabalhando sobre os produtos.
function analisarCatalogo(lista) {
  const precos = lista.map(function (produto) {
    return produto.preco;
  });

  const disponiveis = lista.filter(function (produto) {
    return produto.estoque > 0;
  });

  const valorTotal = precos.reduce(function (acumulado, preco) {
    return acumulado + preco;
  }, 0);

  const maiorPreco = lista.reduce(function (maior, produto) {
    return produto.preco > maior.preco ? produto : maior;
  }, lista[0]);

  // O laço for...of soma as unidades disponíveis sem alterar os dados originais.
  let unidadesDisponiveis = 0;
  for (const produto of lista) {
    unidadesDisponiveis += produto.estoque;
  }

  // while percorre as categorias para contar quantos produtos pertencem a cada uma.
  const categorias = ["Feminino", "Masculino", "Unissex"];
  const totaisPorCategoria = {};
  let indice = 0;

  while (indice < categorias.length) {
    const categoriaAtual = categorias[indice];
    totaisPorCategoria[categoriaAtual] = lista.filter(function (produto) {
      return produto.categoria === categoriaAtual;
    }).length;
    indice++;
  }

  return {
    quantidade: lista.length,
    valorTotal: valorTotal,
    maiorPreco: maiorPreco,
    disponiveis: disponiveis.length,
    unidadesDisponiveis: unidadesDisponiveis,
    totaisPorCategoria: totaisPorCategoria
  };
}

function mostrarAnalise() {
  const resumo = analisarCatalogo(produtos);
  document.getElementById("totalProdutos").textContent = resumo.quantidade;
  document.getElementById("valorCatalogo").textContent = formatarPreco(resumo.valorTotal);
  document.getElementById("produtoDestaque").textContent = formatarPreco(resumo.maiorPreco.preco);
  desenharGrafico(resumo.totaisPorCategoria);
}

// Desenha um gráfico simples no Canvas. clearRect limpa o quadro antes de cada desenho.
function desenharGrafico(dados) {
  const canvas = document.getElementById("graficoCatalogo");
  const contexto = canvas.getContext("2d");

  if (!contexto) {
    return;
  }

  const larguraCss = canvas.clientWidth;
  const alturaCss = 210;
  const escala = window.devicePixelRatio || 1;

  canvas.width = Math.round(larguraCss * escala);
  canvas.height = Math.round(alturaCss * escala);
  contexto.scale(escala, escala);
  contexto.clearRect(0, 0, larguraCss, alturaCss);

  const categorias = Object.keys(dados);
  const valores = Object.values(dados);
  const maiorValor = Math.max(...valores, 1);
  const espacamento = larguraCss / (categorias.length * 2);
  const larguraBarra = Math.min(48, espacamento * .72);

  categorias.forEach(function (categoria, indice) {
    const alturaBarra = (valores[indice] / maiorValor) * 112;
    const x = espacamento * (indice * 2 + 1) + (espacamento - larguraBarra) / 2;
    const y = 145 - alturaBarra;

    contexto.fillStyle = "#c6a56b";
    contexto.fillRect(x, y, larguraBarra, alturaBarra);

    contexto.fillStyle = "#e0c797";
    contexto.font = "12px Arial";
    contexto.textAlign = "center";
    contexto.fillText(String(valores[indice]), x + larguraBarra / 2, y - 9);

    contexto.fillStyle = "#b8b2a6";
    contexto.font = "10px Arial";
    contexto.fillText(categoria, x + larguraBarra / 2, 170);
  });
}

function abrirWhatsApp(mensagem) {
  // Número de atendimento configurado no projeto.
  const telefoneWhatsApp = "5583986946326";
  const endereco = "https://wa.me/" + telefoneWhatsApp + "?text=" + encodeURIComponent(mensagem);
  window.open(endereco, "_blank", "noopener,noreferrer");
}

// Menu mobile: mantém aria-expanded sincronizado com o estado visual.
const botaoMenu = document.getElementById("menuMobile");
const menuPrincipal = document.getElementById("menuPrincipal");

botaoMenu.addEventListener("click", function () {
  const aberto = menuPrincipal.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

menuPrincipal.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuPrincipal.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

// O dropdown também pode selecionar diretamente uma categoria do catálogo.
document.querySelectorAll("[data-filtro-link]").forEach(function (link) {
  link.addEventListener("click", function () {
    filtroCategoria.value = link.dataset.filtroLink;
    filtrarProdutos();
  });
});

campoBusca.addEventListener("input", filtrarProdutos);
filtroCategoria.addEventListener("change", filtrarProdutos);\ncampoPrecoMaximo.addEventListener("input", filtrarProdutos);

// Formulário validado pelo navegador; os dados seguem para o WhatsApp informado.
document.getElementById("formContato").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const formulario = evento.currentTarget;
  if (!formulario.reportValidity()) {
    return;
  }

  const dados = new FormData(formulario);
  const mensagem = [
    "Olá! Meu nome é " + dados.get("nome") + ".",
    "E-mail: " + dados.get("email"),
    "WhatsApp: " + dados.get("telefone"),
    "Família olfativa: " + dados.get("familia"),
    "Prefiro receber retorno por: " + dados.get("preferencia"),
    "Detalhes: " + (dados.get("mensagem") || "Não informado.")
  ].join("\n");

  document.getElementById("feedbackFormulario").textContent = "Abrindo o WhatsApp para continuar seu atendimento...";
  abrirWhatsApp(mensagem);
});

// Atualiza o ano do rodapé e inicia os componentes da página.
document.getElementById("ano").textContent = new Date().getFullYear();
renderizarProdutos(produtos);
preencherTabela();
mostrarAnalise();

// Redesenha o Canvas quando a largura muda, evitando distorção em telas menores.
let temporizadorRedesenho;
window.addEventListener("resize", function () {
  window.clearTimeout(temporizadorRedesenho);
  temporizadorRedesenho = window.setTimeout(mostrarAnalise, 120);
});

// Destaca no menu a seção que está mais presente na área visível.
const secoesNavegacao = document.querySelectorAll("main section[id]");
const linksNavegacao = document.querySelectorAll(".menu a[href^='#']");
if ("IntersectionObserver" in window) {
  const observadorSecoes = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        linksNavegacao.forEach(function (link) {
          const ativo = link.getAttribute("href") === "#" + entrada.target.id;
          link.classList.toggle("ativo", ativo);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  secoesNavegacao.forEach(function (secao) { observadorSecoes.observe(secao); });
}
