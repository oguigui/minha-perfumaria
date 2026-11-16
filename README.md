# GUI Luxury — Perfumaria

A GUI Luxury é um projeto acadêmico de desenvolvimento front-end que apresenta um catálogo demonstrativo de perfumes. A página foi pensada para quem gosta de conhecer fragrâncias e comparar estilos, categorias e preços. A proposta é reunir essas informações em uma navegação simples, com identidade visual própria e contato direto pelo WhatsApp.

**Site publicado:** https://oguigui.github.io/projeto-integrador-frontend-guilherme-henrique/  
**Repositório:** https://github.com/oguigui/projeto-integrador-frontend-guilherme-henrique

> **Importante:** os produtos, preços e quantidades são dados fictícios para demonstrar as funcionalidades. O site não processa vendas nem consulta estoque real.

## O que a página oferece

- Catálogo com cinco fragrâncias e informações de preço, categoria, descrição e disponibilidade.
- Busca por nome e filtros por categoria e preço máximo.
- Tabela, indicadores e gráfico atualizados conforme os filtros.
- Botões de interesse que preparam uma mensagem para o WhatsApp.
- Atividade de lógica para consultar perfumes dentro de um limite de preço.
- Menu adaptado para telas menores, formulário com validação e elementos acessíveis.
- Vídeo de ambientação e assinatura sonora com alternativas de áudio MP3 e OGG.

## Tecnologias utilizadas

- HTML5 semântico.
- CSS3, com variáveis, Flexbox, Grid, pseudo-classes e media queries.
- JavaScript puro, com funções, arrays, estruturas de controle, manipulação do DOM e eventos.
- SVG e Canvas 2D.
- Git, GitHub e GitHub Pages.

O projeto não utiliza Bootstrap, jQuery, React ou outros frameworks.

## Organização dos arquivos

```text
projeto-integrador-frontend-guilherme-henrique/
├── index.html
├── image.png                 # imagem de comprovação mantida na raiz
├── README.md
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   ├── main.js
│   └── logica.js
├── assets/
│   ├── audio/
│   │   └── assinatura-gui-luxury.mp3
│   └── images/
│       ├── image.png
│       └── perfume-ilustracao.svg
└── docs/
    └── historico-do-projeto.md
```

As imagens dos produtos e a imagem de fundo são carregadas de endereços da Unsplash. O vídeo de ambientação vem do Pexels. O áudio oferece um arquivo MP3 local e uma alternativa OGG incorporada no HTML como data URI.

## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador. Também é possível usar a extensão Live Server.
4. Para consultar a versão publicada, use o link do GitHub Pages no início deste documento.

Os arquivos locais são chamados por caminhos relativos à pasta do projeto.

## Mapa dos requisitos da entrega

| Requisito | Onde conferir |
|---|---|
| Estrutura HTML5, idioma, metadados e título | `index.html`, início do documento |
| Título principal e estrutura semântica | `index.html`, `header`, `main`, seções e `footer` |
| Lista e tabela relacionadas ao tema | `index.html`, seções Nossa essência e Análise |
| Formulário, labels, fieldset, legend e validação | `index.html`, seção Contato; envio em `js/main.js` |
| Vídeo, áudio e estratégia de carregamento | `index.html`, seções de vídeo e assinatura sonora |
| SVG e Canvas com alternativa textual | `index.html`, marca e seção Análise; desenho em `js/main.js` |
| Reset e box model | `css/reset.css` |
| Variáveis, tipografia, estados de link e foco | `css/style.css`, início do arquivo |
| Navbar Flexbox, dropdown, estado ativo e menu móvel | `index.html`, navegação; regras em `css/style.css`; eventos em `js/main.js` |
| Grid, pseudo-classe estrutural e efeito de hover | `css/style.css`, `.grade-produtos` e `.produto:nth-child(2)` |
| Lógica: dados, classificação e resumo | `js/logica.js`, comentário de planejamento e funções de classificação e resumo |
| Funções, escopo, conversão com Number e retorno | `js/main.js` e `js/logica.js` |
| map, filter, reduce e criação de elementos no DOM | `js/main.js`, renderização, filtros e tabela |
| Delegação de eventos nos cards | `js/main.js`, listener de clique em `gradeProdutos` |
| Busca, filtros e resumo atualizado | `js/main.js`, função `filtrarProdutos()` e atualização da análise |
| Botão acessível do menu | `index.html`, botão `#menuMobile`; controle em `js/main.js` |
| Scripts carregados com defer | `index.html`, final do `body` |
| Responsividade | `css/style.css`, media queries |

## Imagem de comprovação

A imagem abaixo foi mantida como registro visual do projeto e não é usada como fotografia de produto.

![Imagem de comprovação do projeto GUI Luxury](assets/images/image.png)

**Captura em celular:** ainda precisa ser registrada em um navegador no modo responsivo e adicionada à pasta `assets/images/`. Não foi criada uma imagem simulada para substituir essa evidência.

## Autor

- **Nome:** Guilherme Henrique
- **RGM:** 50129031
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Disciplina:** Desenvolvimento Front-End para Web

## Funcionamento e privacidade

O projeto é estático e não possui servidor ou banco de dados próprio. O formulário organiza as informações preenchidas em uma mensagem e abre o WhatsApp para que a pessoa decida se deseja enviá-la. Nenhuma mensagem é enviada automaticamente pelo site.

Não utilize dados pessoais de terceiros durante os testes. Antes de qualquer uso comercial, será necessário apresentar informações de privacidade adequadas.

## Créditos

- **Fotografias:** imagens remotas da [Unsplash](https://unsplash.com/license). Os créditos individuais dos fotógrafos não estão identificados no código.
- **Vídeo:** MART PRODUCTION, disponível no [Pexels](https://www.pexels.com/video/a-bottle-of-perfume-next-to-a-white-rose-8447664/). Consulte a [licença Pexels](https://www.pexels.com/license/).
- **Gráfico:** Canvas 2D nativo, sem biblioteca externa.
- **Marca e ilustração:** SVG mantido nos arquivos do projeto.

## Conferência antes da entrega

Antes de enviar o link ao professor:

1. Abra o projeto em uma pasta nova e confira se a página carrega com estilos, imagens e mídia.
2. No DevTools, aba Network, verifique se há arquivos com erro 404.
3. No Console, teste busca, filtros, menu, formulário, consulta por preço e botões dos cards.
4. Confira o layout em desktop e celular e salve uma captura real de cada formato.
5. Verifique se as imagens aparecem no README do GitHub.

O código contém os recursos descritos no mapa, mas a conferência final em diferentes navegadores e a captura mobile ainda precisam ser realizadas antes da entrega.
