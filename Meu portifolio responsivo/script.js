const header = document.querySelector("header");
const secoes = document.querySelectorAll("main section, footer");
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

/* ---------- cor do menu conforme a seção ---------- */
function atualizarMenu() {
    const y = header.offsetHeight / 2;

    for (const secao of secoes) {
        const r = secao.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) {
            header.classList.toggle("header-claro", secao.dataset.tema === "claro");
            break;
        }
    }
}

window.addEventListener("scroll", atualizarMenu, { passive: true });
window.addEventListener("resize", atualizarMenu);
atualizarMenu();

/* ---------- menu hambúrguer (mobile) ---------- */
function alternarMenu(abrir) {
    const aberto = typeof abrir === "boolean" ? abrir : !header.classList.contains("menu-aberto");

    header.classList.toggle("menu-aberto", aberto);
    document.body.classList.toggle("sem-scroll", aberto);
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}

botaoMenu.addEventListener("click", () => alternarMenu());

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => alternarMenu(false));
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") alternarMenu(false);
});

// se a tela voltar para o tamanho desktop, garante o menu fechado
window.matchMedia("(min-width: 769px)").addEventListener("change", e => {
    if (e.matches) alternarMenu(false);
});

/* ---------- formulário de contato ---------- */
const formContato = document.getElementById("form-contato");
if (formContato) {
    formContato.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `Olá! Meu nome é ${nome} (${email}).\n\n${mensagem}`;
        window.open("https://wa.me/5534984103263?text=" + encodeURIComponent(texto), "_blank");
    });
}