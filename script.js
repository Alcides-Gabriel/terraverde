function urlAtiva() {
  const links = document.querySelectorAll(".menu-header a");
  const atualHref = window.location.href;
  links.forEach((link) => {
    link.classList.remove("link-ativo");
    let linkHref = link.href;
    if (linkHref == atualHref) {
      link.classList.add("link-ativo");
    }
  });
}
urlAtiva();

function animacaoScroll() {
  const quebras = document.querySelectorAll(".js-scroll");

  if (quebras.length) {
    const windowMetade = window.innerHeight;

    function animarScroll() {
      quebras.forEach((quebra) => {
        const pontoQuebra = quebra.getBoundingClientRect().top;
        const visivel = pontoQuebra - windowMetade < 0;
        if (visivel) {
          quebra.classList.add("ativo");
        } else {
          quebra.classList.remove("ativo");
        }
      });
    }
    animarScroll();
    window.addEventListener("scroll", animarScroll);
  }
}
animacaoScroll();

const botao = document.querySelector("button");

function naoFuncionar(event) {
  event.preventDefault();
}

botao.addEventListener("click", () => {
  naoFuncionar(botao);
});
