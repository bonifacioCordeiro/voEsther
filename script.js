let indexAtual = 0;
let slides;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.getElementById('slides');
});

function mudarSlide(direcao) {
  if (!slides) return;

  const total = slides.children.length;
  indexAtual += direcao;

  if (indexAtual < 0) indexAtual = total - 1;
  if (indexAtual >= total) indexAtual = 0;

  slides.style.transform = `translateX(-${indexAtual * 300}px)`;
}