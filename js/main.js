const fotos = document.querySelectorAll(".recuerdo");
const reducirMovimiento = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reducirMovimiento && "IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  fotos.forEach((foto) => {
    foto.classList.add("animar");
    observador.observe(foto);
  });
}