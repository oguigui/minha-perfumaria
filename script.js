
// ================================
// 1. CONFIGURAÇÃO DO WHATSAPP
// ================================

// Coloque seu número com código do Brasil e DDD.
// Exemplo fictício: 5511999999999
const telefoneWhatsApp = "5583986946326";


// ================================
// 2. MENU PARA CELULAR
// ================================

const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("aberto");

    menuMobile.setAttribute("aria-expanded", menuAberto);

    menuMobile.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuMobile.textContent = menuAberto ? "✕" : "☰";
});

// Fecha o menu depois que um link é clicado.
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");

        menuMobile.setAttribute("aria-expanded", "false");
        menuMobile.setAttribute("aria-label", "Abrir menu");

        menuMobile.textContent = "☰";
    });
});


// ================================
// 3. PESQUISA DE PERFUMES
// ================================

const campoBusca = document.getElementById("busca");
const produtos = document.querySelectorAll(".produto");
const semResultados = document.getElementById("semResultados");

campoBusca.addEventListener("input", function () {
    const pesquisa = campoBusca.value.toLowerCase().trim();

    let quantidadeEncontrada = 0;

    produtos.forEach(function (produto) {
        const nome = produto.dataset.nome.toLowerCase();
        const texto = produto.textContent.toLowerCase();

        const encontrado =
            nome.includes(pesquisa) ||
            texto.includes(pesquisa);

        produto.hidden = !encontrado;

        if (encontrado) {
            quantidadeEncontrada++;
        }
    });

    semResultados.hidden = quantidadeEncontrada > 0;
});


// ================================
// 4. FUNÇÃO DO WHATSAPP
// ================================

function abrirWhatsApp(mensagem) {
    if (!telefoneWhatsApp.trim()) {
        alert(
            "Configure seu número de WhatsApp no arquivo js/script.js."
        );

        return;
    }

    const telefone = telefoneWhatsApp.replace(/\D/g, "");
    const texto = encodeURIComponent(mensagem);

    window.open(
        `https://wa.me/${telefone}?text=${texto}`,
        "_blank",
        "noopener,noreferrer"
    );
}


// ================================
// 5. BOTÕES DOS PRODUTOS
// ================================

document.querySelectorAll(".comprar").forEach(function (botao) {
    botao.addEventListener("click", function () {
        const produto = botao.dataset.produto;

        abrirWhatsApp(
            `Olá! Tenho interesse no perfume ${produto}. Pode me passar mais informações?`
        );
    });
});


// ================================
// 6. BOTÃO DE CONTATO
// ================================

const contatoWhatsApp = document.getElementById("contatoWhatsApp");

contatoWhatsApp.addEventListener("click", function (evento) {
    evento.preventDefault();

    abrirWhatsApp(
        "Olá! Quero conhecer os perfumes da GUI Essence."
    );
});


// ================================
// 7. ANO AUTOMÁTICO NO RODAPÉ
// ================================

document.getElementById("ano").textContent =
    new Date().getFullYear();
