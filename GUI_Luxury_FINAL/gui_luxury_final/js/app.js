// Interações da loja e exercícios de lógica aplicados ao catálogo.
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownTrigger = document.querySelector(".dropdown-trigger");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const aberto = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(aberto));
      menuToggle.setAttribute("aria-label", aberto ? "Fechar menu de navegação" : "Abrir menu de navegação");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener("click", () => {
      const aberto = dropdown.classList.toggle("open");
      dropdownTrigger.setAttribute("aria-expanded", String(aberto));
    });
  }

  const productGrid = document.querySelector("#product-grid");
  const filterButtons = document.querySelectorAll(".filter-button");

  function renderizarProdutos(lista) {
    if (!productGrid) return;
    productGrid.replaceChildren();

    if (lista.length === 0) {
      const aviso = document.createElement("p");
      aviso.classList.add("empty-message");
      aviso.textContent = "Não encontramos fragrâncias nessa categoria.";
      productGrid.append(aviso);
      return;
    }

    lista.forEach((perfume) => {
      const card = document.createElement("article");
      card.classList.add("product-card");

      const imagem = document.createElement("img");
      imagem.src = perfume.imagem;
      imagem.alt = `Frasco ilustrado de ${perfume.nome}`;

      const info = document.createElement("div");
      info.classList.add("product-info");

      const tipo = document.createElement("span");
      tipo.classList.add("product-type");
      tipo.textContent = `${perfume.categoria.toUpperCase()} · ${perfume.familia.toUpperCase()}`;

      const titulo = document.createElement("h3");
      titulo.textContent = perfume.nome;

      const descricao = document.createElement("p");
      descricao.textContent = perfume.descricao;

      const preco = document.createElement("strong");
      preco.textContent = formatarMoeda(perfume.preco);

      const faixa = document.createElement("small");
      faixa.classList.add("price-range");
      faixa.textContent = classificarPreco(perfume.preco);

      info.append(tipo, titulo, descricao, preco, faixa);
      card.append(imagem, info);
      productGrid.append(card);
    });
  }

  filterButtons.forEach((botao) => {
    botao.addEventListener("click", () => {
      const filtro = botao.dataset.filter;
      filterButtons.forEach((item) => {
        const selecionado = item === botao;
        item.classList.toggle("selected", selecionado);
        item.setAttribute("aria-pressed", String(selecionado));
      });
      const filtrados = perfumes.filter((item) => filtro === "todos" || item.categoria === filtro);
      renderizarProdutos(filtrados);
    });
  });

  // Funções independentes para calcular e classificar os produtos.
  function calcularComDesconto(preco, percentual = 0) {
    return preco - (preco * percentual / 100);
  }

  function classificarPreco(preco) {
    if (preco < 300) return "Faixa acessível";
    if (preco <= 350) return "Faixa intermediária";
    return "Faixa premium";
  }

  function processarColecao(lista = perfumes) {
    const valores = lista.map((item) => calcularComDesconto(item.preco));
    const emConta = lista.filter((item) => item.preco <= 320);
    const total = valores.reduce((soma, valor) => soma + valor, 0);
    return {
      quantidade: lista.length,
      emConta,
      media: lista.length ? total / lista.length : 0,
      menor: valores.length ? Math.min(...valores) : 0,
      maior: valores.length ? Math.max(...valores) : 0
    };
  }

  const resumo = processarColecao();
  const resultCount = document.querySelector("#result-count");
  const resultAverage = document.querySelector("#result-average");
  const resultMin = document.querySelector("#result-min");
  const resultMax = document.querySelector("#result-max");
  const resultMessage = document.querySelector("#result-message");

  function atualizarResumo(dados) {
    if (resultCount) resultCount.textContent = String(dados.quantidade).padStart(2, "0");
    if (resultAverage) resultAverage.textContent = formatarMoeda(dados.media);
    if (resultMin) resultMin.textContent = formatarMoeda(dados.menor);
    if (resultMax) resultMax.textContent = formatarMoeda(dados.maior);
    if (resultMessage) resultMessage.textContent = `${dados.emConta.length} fragrâncias custam até R$ 320,00.`;
  }

  atualizarResumo(resumo);
  renderizarProdutos(perfumes);

  const tableBody = document.querySelector("#product-table");
  if (tableBody) {
    tableBody.replaceChildren();
    perfumes.forEach((perfume) => {
      const linha = document.createElement("tr");
      [perfume.nome, perfume.categoria, formatarMoeda(perfume.preco)].forEach((valor) => {
        const celula = document.createElement("td");
        celula.textContent = valor;
        linha.append(celula);
      });
      tableBody.append(linha);
    });
  }

  // Canvas 2D: a largura de cada espaço é calculada conforme a quantidade de itens.
  const canvas = document.querySelector("#price-canvas");
  if (canvas) {
    const contexto = canvas.getContext("2d");
    if (contexto) {
      const largura = canvas.width;
      const altura = canvas.height;
      contexto.clearRect(0, 0, largura, altura);
      contexto.fillStyle = "#17130f";
      contexto.fillRect(0, 0, largura, altura);

      const maiorPreco = Math.max(...perfumes.map((item) => item.preco));
      const espacamento = largura / perfumes.length;

      perfumes.forEach((perfume, indice) => {
        const barraAltura = (perfume.preco / maiorPreco) * 135;
        const x = indice * espacamento + espacamento * 0.25;
        const y = 175 - barraAltura;
        const gradiente = contexto.createLinearGradient(0, y, 0, 175);
        gradiente.addColorStop(0, "#e3c991");
        gradiente.addColorStop(1, "#8e6d3c");
        contexto.fillStyle = gradiente;
        contexto.fillRect(x, y, espacamento * 0.5, barraAltura);

        contexto.fillStyle = "#f4eee4";
        contexto.font = "12px Arial";
        contexto.textAlign = "center";
        contexto.fillText(perfume.nome, x + espacamento * 0.25, 198);
        contexto.fillStyle = "#c6a56a";
        contexto.fillText(formatarMoeda(perfume.preco), x + espacamento * 0.25, y - 8);
      });

      contexto.strokeStyle = "#6b5943";
      contexto.beginPath();
      contexto.moveTo(15, 176);
      contexto.lineTo(largura - 15, 176);
      contexto.stroke();
    }
  }

  // Formulário de orçamento: validação, condicionais, switch, for/of e while.
  const analysisForm = document.querySelector("#analysis-form");
  const budgetInput = document.querySelector("#budget");
  const analysisFeedback = document.querySelector("#analysis-feedback");

  if (analysisForm && budgetInput && analysisFeedback) {
    analysisForm.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const orcamento = Number(budgetInput.value);

      if (!Number.isFinite(orcamento) || orcamento < 1 || orcamento > 10000) {
        analysisFeedback.textContent = "Digite um valor válido entre R$ 1 e R$ 10.000.";
        return;
      }

      let faixa;
      if (orcamento < 200) faixa = "entrada";
      else if (orcamento < 350) faixa = "intermediaria";
      else faixa = "premium";

      let mensagem;
      switch (faixa) {
        case "entrada":
          mensagem = "Esse valor está abaixo dos preços da coleção demonstrativa.";
          break;
        case "intermediaria":
          mensagem = "Há algumas opções interessantes dentro dessa faixa.";
          break;
        case "premium":
          mensagem = "Seu orçamento alcança boa parte da coleção.";
          break;
        default:
          mensagem = "Não foi possível classificar o orçamento.";
      }

      const recomendados = [];
      let totalSelecionado = 0;
      for (const perfume of perfumes) {
        if (perfume.preco <= orcamento) {
          recomendados.push(perfume);
          totalSelecionado += perfume.preco;
        }
      }

      // O while percorre a lista recomendada e confere a soma dos preços.
      let indice = 0;
      let somaVerificada = 0;
      while (indice < recomendados.length) {
        somaVerificada += recomendados[indice].preco;
        indice++;
      }

      const media = recomendados.length ? totalSelecionado / recomendados.length : 0;
      analysisFeedback.textContent = `${mensagem} ${recomendados.length} fragrância(s) dentro do orçamento.`;
      if (resultMessage) {
        resultMessage.textContent = recomendados.length
          ? `${recomendados.map((item) => item.nome).join(", ")} — média: ${formatarMoeda(media)}.`
          : "Nenhuma fragrância do catálogo está dentro desse orçamento.";
      }
      if (resultCount) resultCount.textContent = String(recomendados.length).padStart(2, "0");
      if (resultAverage) resultAverage.textContent = formatarMoeda(media);
      if (resultMin) resultMin.textContent = recomendados.length
        ? formatarMoeda(Math.min(...recomendados.map((item) => item.preco))) : "—";
      if (resultMax) resultMax.textContent = recomendados.length
        ? formatarMoeda(Math.max(...recomendados.map((item) => item.preco))) : "—";

      console.table(recomendados);
      console.log(`Conferência do while: ${formatarMoeda(somaVerificada)}`);
    });
  }

  // Pequeno exercício interativo com prompt e while para praticar entradas e repetição.
  const logicButton = document.querySelector("#logic-practice");
  if (logicButton) {
    logicButton.addEventListener("click", () => {
      const anotacoes = [];
      let resposta = "";
      while (resposta.toLowerCase() !== "fim") {
        resposta = prompt('Digite uma família olfativa que você gosta (ou "fim" para encerrar):') || "fim";
        if (resposta.toLowerCase() !== "fim" && resposta.trim()) {
          anotacoes.push(resposta.trim());
        }
      }
      analysisFeedback.textContent = anotacoes.length
        ? `Você demonstrou interesse em: ${anotacoes.join(", ")}.`
        : "Nenhuma preferência foi adicionada nesta rodada.";
    });
  }

  // Formulário de contato: demonstra validação nativa, sem enviar dados a um servidor.
  const contactForm = document.querySelector("#contact-form");
  const contactFeedback = document.querySelector("#contact-feedback");
  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (evento) => {
      evento.preventDefault();
      if (!contactForm.reportValidity()) return;
      const nome = document.querySelector("#name")?.value.trim() || "visitante";
      contactFeedback.textContent = `Obrigado, ${nome}! Seu interesse foi registrado nesta demonstração.`;
      contactForm.reset();
    });
  }

  const video = document.querySelector("video");
  if (video) {
    console.info("Suporte MP4:", video.canPlayType('video/mp4; codecs="avc1.42E01E"'));
    console.info("Suporte WebM:", video.canPlayType('video/webm; codecs="vp8, vorbis"'));
  }
});

/*
Roteiro da análise:
1. Receber o orçamento e validar o número.
2. Classificar a faixa com if/else e switch.
3. Percorrer o catálogo e separar os produtos possíveis.
4. Somar os preços e calcular a média.
5. Mostrar o resultado na página e conferir os dados no console.

Teste manual sugerido:
- R$ 100: nenhuma fragrância.
- R$ 300: Âmbar Royale e Jardin Doré.
- R$ 500: as cinco fragrâncias.
*/
