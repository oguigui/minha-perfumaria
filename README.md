# GUI Luxury — Perfumaria

Projeto acadêmico de desenvolvimento front-end: um protótipo de site para apresentar uma seleção fictícia de fragrâncias com identidade visual própria.

**Site:** https://oguigui.github.io/minha-perfumaria/  
**Repositório:** https://github.com/oguigui/minha-perfumaria  
**Relatório completo:** [Relatório de responsabilidade ética e profissional (PDF)](docs/Relatorio_GUI_Luxury.pdf)

## Objetivo e público

A GUI Luxury demonstra como uma perfumaria pode apresentar seu catálogo e ajudar visitantes a explorar fragrâncias por nome, categoria e faixa de preço. O público pretendido são pessoas interessadas em conhecer perfumes e consultar opções antes de entrar em contato.

> **Importante:** este é um protótipo acadêmico. Os cinco perfumes, preços e quantidades em estoque são fictícios e não representam ofertas ou disponibilidade comercial real.

## Funcionalidades

- Catálogo demonstrativo com cinco fragrâncias.
- Busca por nome e filtros por categoria e preço máximo.
- Cards com descrição, preço ilustrativo e disponibilidade fictícia.
- Resumo do catálogo, tabela e gráfico em Canvas.
- Exercício de lógica JavaScript para consultar produtos por preço.
- Seções institucionais, vídeo de ambientação e assinatura sonora.
- Formulário demonstrativo que prepara uma mensagem e abre o WhatsApp.

## Como visualizar

1. Clone ou baixe este repositório.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador ou use a extensão Live Server.
4. O site também pode ser acessado pelo link publicado acima.

## Tecnologias e estrutura

- HTML5, CSS3 e JavaScript puro, sem framework.
- `index.html`: estrutura e conteúdo da página.
- `css/reset.css` e `css/style.css`: estilos e adaptação para telas menores.
- `js/main.js`: catálogo fictício, filtros, formulário, tabela e gráfico.
- `js/logica.js`: exercício de lógica com consulta de preços.
- `assets/images/`: ilustração SVG local.
- `assets/audio/`: arquivo de áudio local.

## Privacidade e dados

O projeto não possui servidor nem banco de dados próprio e não armazena os dados do formulário. Entretanto, o formulário solicita nome, e-mail, telefone, preferência de contato, família olfativa e mensagem opcional. Ao enviar, esses dados são inseridos em uma mensagem pré-preenchida e encaminhados ao WhatsApp quando a pessoa prossegue. Por isso, não use dados reais de terceiros em testes. O formulário precisa de um aviso de privacidade mais completo antes de qualquer uso real.

## Créditos e materiais externos

- **Fotografias dos produtos:** imagens carregadas da [Unsplash](https://unsplash.com/license). A licença permite usos gratuitos, inclusive comerciais, observadas suas restrições. Os créditos individuais dos fotógrafos não foram identificados no código.
- **Vídeo de ambientação:** [MART PRODUCTION — vídeo no Pexels](https://www.pexels.com/video/a-bottle-of-perfume-next-to-a-white-rose-8447664/). O site inclui crédito e link para a página do vídeo. Consulte a [Licença Pexels](https://www.pexels.com/license/).
- **Ilustração SVG e áudio:** arquivos locais do projeto. A origem/licença do áudio e a autoria integral da ilustração não estão documentadas de forma suficiente; devem ser confirmadas antes de uso fora do contexto acadêmico.
- **Fontes e gráfico:** fontes comuns do sistema e Canvas nativo, sem biblioteca externa identificada.
- **Contato:** link `wa.me` para abrir o WhatsApp; não há API própria de catálogo ou pagamento.

## Acessibilidade e responsabilidade

O código inclui idioma da página, link para pular ao conteúdo, rótulos de formulário, textos alternativos, foco visível, atributos ARIA, tabela com cabeçalhos e suporte a redução de movimento. Esses recursos foram inspecionados no código, mas ainda é necessário realizar testes completos com teclado, leitor de tela e verificação de contraste.

O projeto usa recursos externos e mídia remota; o vídeo pode consumir dados. Uma melhoria futura é iniciar o vídeo apenas após ação do visitante, reduzir os campos do formulário e apresentar um aviso de privacidade claro.

Consulte o [relatório completo em PDF](docs/Relatorio_GUI_Luxury.pdf) para a análise dos nove tópicos, limitações, legislação e referências.
