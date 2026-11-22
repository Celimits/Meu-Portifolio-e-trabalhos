const header = document.querySelector("header");
const secoes = document.querySelectorAll("main section, footer");

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
}<section id="habilidades" class="parte2site" data-tema="claro"></section>