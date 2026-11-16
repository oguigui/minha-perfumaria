# GUI Luxury — Perfumaria

Projeto Integrador acadêmico de desenvolvimento front-end. A GUI Luxury é um protótipo de perfumaria que apresenta fragrâncias fictícias e permite explorar o catálogo por nome, categoria e preço. O público pretendido são pessoas interessadas em conhecer diferentes estilos de perfume e consultar informações antes de entrar em contato.

**Site publicado:** https://oguigui.github.io/projeto-integrador-frontend-guilherme-henrique/  
**Repositório:** https://github.com/oguigui/projeto-integrador-frontend-guilherme-henrique

> **Aviso:** os cinco perfumes, preços e quantidades em estoque são dados demonstrativos. O projeto não representa uma loja com estoque ou vendas reais.

## Funcionalidades

- Catálogo com cinco fragrâncias e informações de nome, preço, categoria, estoque e descrição.
- Busca por nome e filtros por categoria e preço máximo.
- Atualização da grade, da tabela, dos indicadores e do gráfico conforme os filtros.
- Botões de interesse com delegação de eventos e encaminhamento para o WhatsApp.
- Exercício interativo de lógica com classificação por faixa de preço e resumo.
- Gráfico Canvas e marca vetorial em SVG.
- Menu responsivo com estado acessível e formulário com validação nativa.
- Vídeo de ambientação e assinatura sonora com fontes MP3 e OGG.

## Tecnologias

- HTML5 semântico.
- CSS3 (variáveis, Flexbox, Grid, pseudo-classes e media queries).
- JavaScript puro (arrays, funções, estruturas de controle, DOM e eventos).
- Canvas 2D e SVG.
- Git e GitHub Pages.

Não são usados Bootstrap, jQuery, React ou outros frameworks.

## Estrutura do projeto

```text
minha-perfumaria/
├── index.html
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   ├── main.js
│   └── logica.js
└── assets/
    ├── images/
    │   └── perfume-ilustracao.svg
    └── audio/
        └── assinatura-gui-luxury.mp3
```

O vídeo de ambientação é carregado do Pexels; as fotografias dos produtos e a imagem de fundo são carregadas da Unsplash. O áudio oferece MP3 por arquivo local e OGG incorporado diretamente no HTML como data URI (não existe um segundo arquivo OGG na pasta).

## Como executar

1. Clone o repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` diretamente no navegador ou use a extensão Live Server.
4. Para conferir a versão publicada, acesse o link do GitHub Pages no início deste documento.

Todos os caminhos dos arquivos locais são relativos à raiz do projeto.

## Mapa dos requisitos da entrega

| Requisito | Arquivo / seção de implementação |
|---|---|
| Estrutura HTML5, idioma, metadados e título | `index.html`, início do documento |
| Título principal, texto de apresentação e semântica | `index.html`, `header`, `main`, seções e `footer` |
| Lista de conteúdo e tabela de produtos | `index.html`, seções Nossa essência e Análise; dados preenchidos por `preencherTabela()` em `js/main.js` |
| Formulário, labels, fieldset, legend e validação | `index.html`, seção Contato; envio tratado em `js/main.js` |
| SVG e Canvas com texto alternativo/fallback | `index.html`, marca e seção Análise; `desenharGrafico()` em `js/main.js` |
| Vídeo e áudio com estratégia de carregamento | `index.html`, seções Vídeo e Assinatura sonora |
| Reset global e box model | `css/reset.css` |
| Variáveis, tipografia, seletores, estados de link e foco | `css/style.css`, início do arquivo e regras de navegação |
| Navbar Flexbox, dropdown, sticky e menu móvel | `css/style.css` e `index.html`; controle em `js/main.js` |
| Grade responsiva Grid e pseudo-classe estrutural | `css/style.css`, seletor `.grade-produtos` e `.produto:nth-child(2)` |
| Lógica (dados → classificar → resumir), `if/else if/else`, `switch`, `for`, `for...of`, acumulador, `while` e `do...while` | `js/logica.js`, comentário de planejamento no topo, `classificarFaixaPreco()`, `nomeCategoriaLogica()`, `resumirProdutosLogica()` e menu interativo |
| Arrays, DOM e classes de resultado | `js/main.js`, `criarCard()`, `renderizarProdutos()` e `preencherTabela()`; `js/logica.js`, `mostrarProdutosLogica()` |
| Busca, filtros e resumo dinâmico | `js/main.js`, `filtrarProdutos()` e `mostrarAnalise()` |
| Delegação de eventos para cards dinâmicos | `js/main.js`, listener de clique em `gradeProdutos` |
| Botão acessível com `aria-expanded` | `index.html`, botão `#menuMobile`; controle em `js/main.js` |
| Funções, escopo local, `const`/`let`, `Number()` e `return` | `js/main.js` e `js/logica.js`, funções de processamento e classificação |
| Scripts sem dependências e sem declarações globais duplicadas | `index.html`, scripts no final do `body`; `js/main.js` e `js/logica.js` |
| Tipografia com unidades relativas `rem` | `css/style.css`, comentário inicial e declarações tipográficas |
| Responsividade e redução de movimento | `css/style.css`, media queries e `prefers-reduced-motion` |

## Capturas de tela

O documento da entrega exige uma captura real da página em desktop e outra em celular, salvas em `assets/images/`. Essas imagens ainda não foram capturadas nem adicionadas ao repositório. Não foram usadas imagens ilustrativas no lugar de capturas reais.

Nomes sugeridos para os arquivos:
- `assets/images/print-desktop.png`
- `assets/images/print-mobile.png`

## Autor

- **Nome:** Guilherme Henrique
- **RGM:** 50129031.
- **Disciplina:** Desenvolvimento Front-End Para Web.
- **Curso:** Análise e Desenvolvimento de Sistemas.

## Privacidade e dados

O projeto não possui servidor nem banco de dados próprio. O formulário solicita nome, e-mail, telefone, família olfativa, preferência de contato e mensagem opcional. Ao enviar, os campos são organizados em uma mensagem pré-preenchida e o navegador abre o WhatsApp. A pessoa ainda precisa prosseguir no WhatsApp para enviar a mensagem. Não use dados pessoais reais de terceiros em testes. Um aviso de privacidade mais completo deve ser apresentado antes de qualquer uso comercial.

## Créditos e licenças

- **Fotografias:** imagens remotas da [Unsplash](https://unsplash.com/license). Os créditos individuais dos fotógrafos não estão identificados no código.
- **Vídeo:** [MART PRODUCTION — Pexels](https://www.pexels.com/video/a-bottle-of-perfume-next-to-a-white-rose-8447664/). O crédito e o link para a página do vídeo aparecem no site. Consulte a [Licença Pexels](https://www.pexels.com/license/).
- **SVG e áudio:** arquivos locais do projeto. A autoria/licença integral desses arquivos precisa ser confirmada antes de reutilização fora do contexto acadêmico.
- **Gráfico:** Canvas 2D nativo, sem biblioteca externa.
- **Contato:** link para WhatsApp via `wa.me`; não há API própria de catálogo, pagamento ou armazenamento.

## Acessibilidade, responsabilidade e testes

O código inclui idioma da página, link para pular ao conteúdo, labels associados, textos alternativos, foco visível, atributos ARIA, navegação por teclado, tabela com cabeçalhos e respeito à preferência por redução de movimento. Esses itens foram conferidos no código; isso não substitui testes manuais com teclado, leitor de tela e verificação de contraste.

Antes da entrega, faça a conferência no DevTools:
1. Em Network, confirme que os arquivos locais e recursos externos carregam sem erros 404.
2. No Console, abra a página e use busca, filtros, menu, formulário, consulta por preço e botões dos cards.
3. No modo responsivo, confira a apresentação em desktop e celular e salve as duas capturas reais na pasta indicada.
4. Em Elements > Layout, confira as colunas da grade CSS Grid.

Os testes de navegador, as capturas, o RGM e a confirmação do nome oficial do curso precisam ser concluídos no ambiente do aluno antes do envio final.
