# GUI Luxury — Perfumaria

A GUI Luxury é uma perfumaria fictícia criada como Projeto Integrador da disciplina de Desenvolvimento Front-end para Web.
O site apresenta um catálogo de fragrâncias, filtros de busca, informações sobre a marca e um formulário de atendimento.
O projeto foi desenvolvido com HTML5 semântico, CSS3 responsivo e JavaScript puro, sem dependência de frameworks.
A proposta é praticar estruturação de páginas, acessibilidade, layout, manipulação do DOM e análise de dados.

## Como visualizar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Para testar o formulário, é necessário ter o WhatsApp disponível no dispositivo.

## Organização dos arquivos

- `index.html`: estrutura e conteúdo da página.
- `css/reset.css`: reset de margens e box model.
- `css/style.css`: identidade visual, Flexbox, Grid e responsividade.
- `js/main.js`: catálogo, filtros, formulário, análise e gráfico em Canvas.
- `js/logica.js`: mini-analisador interativo com prompt, condicionais, switch e laços.
- `assets/images/`: ilustração SVG usada localmente no projeto.

## Recursos estudados aplicados

- HTML semântico, navegação por âncoras, formulário com labels, fieldset, legend e validação nativa.
- Imagem local com texto alternativo, SVG acessível e Canvas com conteúdo de fallback.
- Assinatura sonora original em dois formatos (MP3 e OGG), com preload="none" e fallback textual.
- CSS com variáveis, box model, Flexbox, Grid responsivo, pseudo-classes, sticky, dropdown e foco visível.
- JavaScript com variáveis, condicionais, switch, for, for...of, while, funções, arrays, objetos, map, filter, reduce e atualização do DOM.
- Catálogo com cinco produtos fictícios, pesquisa, filtro por categoria, tabela e resumo visual.

## Multimídia

A assinatura sonora é um pequeno efeito original sintetizado para o projeto e está incorporada como fontes MP3 e OGG no elemento `<audio>`. O navegador só tenta carregar o áudio quando a pessoa decide reproduzi-lo (`preload="none"`); o JavaScript demonstra a escolha de formato com `canPlayType()`.

## Observação

Os nomes, preços e estoques são dados demonstrativos para a atividade acadêmica. O formulário abre uma conversa no WhatsApp após configurar o número comercial no início da função `abrirWhatsApp`, em `js/main.js`, usando DDI + DDD + número (somente dígitos). O projeto não armazena dados em um servidor.