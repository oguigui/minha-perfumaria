# GUI Luxury — Perfumaria

Este é o projeto que estou desenvolvendo para a disciplina de Desenvolvimento Front-end para Web. Escolhi criar uma perfumaria porque queria trabalhar com um catálogo de produtos e montar uma página com uma identidade visual própria.

A ideia da GUI Luxury é apresentar algumas fragrâncias fictícias, permitir que a pessoa pesquise os produtos e filtre por categoria ou preço. Também coloquei uma parte sobre a marca e um formulário de contato para demonstrar como seria o atendimento.

## Como abrir

1. Baixe o projeto ou clone este repositório.
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador. Se preferir, use a extensão Live Server.
4. Para testar o formulário, configure primeiro o número de WhatsApp indicado em `js/main.js`.

## Pastas e arquivos

- `index.html` — conteúdo e estrutura da página.
- `css/reset.css` — ajustes iniciais para deixar os elementos com um comportamento mais previsível.
- `css/style.css` — cores, fontes, espaçamentos e adaptação para telas menores.
- `js/main.js` — produtos, pesquisa, filtros, formulário e gráfico.
- `js/logica.js` — exercício de lógica com consulta de preços, laços e resumo dos produtos.
- `assets/images/` — imagem SVG usada no site.

## O que dá para testar

- Pesquisar uma fragrância pelo nome.
- Filtrar os produtos por categoria e por preço máximo.
- Abrir o menu de navegação e usar os links das seções.
- Consultar o resumo do catálogo e visualizar o gráfico.
- Clicar em **Executar análise interativa**, informar um preço e escolher se quer listar os produtos ou ver um resumo.
- Reproduzir a pequena assinatura sonora da página.

## Sobre os dados

Os cinco perfumes, os preços e as quantidades em estoque são exemplos criados para o trabalho. Eles não representam produtos reais nem uma loja em funcionamento.

O formulário usa validação do próprio navegador e prepara uma mensagem para o WhatsApp. Para que o envio funcione, é preciso trocar o texto `SEU_NUMERO_COM_DDI` em `js/main.js` pelo número comercial correto, com DDI e DDD e somente números. O site não possui servidor nem salva os dados enviados.

## Tecnologias

Usei HTML, CSS e JavaScript sem framework. No layout, pratiquei Flexbox e Grid; no JavaScript, trabalhei com arrays, objetos, funções, condicionais, laços, eventos e manipulação do DOM.
