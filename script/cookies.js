// === Função para definir cookie ===
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // pega a data atual e soma X dias em milissegundos
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // cria o cookie
}

// === Função para pegar cookie ===
function getCookie(name) {                        /*função que pega o cookie */
    let nameEQ = name + "=";
    let ca = document.cookie.split(';'); // cria um arquivo separado por ;
    for (let i = 0; i < ca.length; i++) { // percorre todos os cookies gravados
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length); //verifica se o cookie começa com nome buscado
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length); // retorna apenas o valor do cookie
    }
    return null;
}

// === Exibir banner apenas se o cookie ainda não existir ===
window.onload = function () { // só roda depois que a página carregar
    if (!getCookie("cookieConsent")) {
        document.getElementById("cookie-banner").style.display = "flex";
    }
};

// === Quando clicar em PERMITIR ===
document.getElementById("cookie-accept").addEventListener("click", () => {
    setCookie("cookieConsent", "accepted", 30); // dura 30 dias
    document.getElementById("cookie-banner").style.display = "none";
});

// === Quando clicar em REJEITAR ===
document.getElementById("cookie-reject").addEventListener("click", () => {
    setCookie("cookieConsent", "rejected", 30);
    document.getElementById("cookie-banner").style.display = "none";
});



// === Verificar cookies existente ===

document.addEventListener("DOMContentLoaded", () => {
    const linkCadastro = document.getElementById("linkCadastro");
    if (!linkCadastro) return;

    if (getCookie("usuarioCadastrado") === "true") {
        linkCadastro.textContent = "Perfil";
        linkCadastro.href = "html/perfil.html"; // coloque a página que quiser
        linkCadastro.classList.add("jaCadastrado");
    }
});