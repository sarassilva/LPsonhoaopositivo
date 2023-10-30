//fade
$(document).ready(function() {
    // Função para verificar quando a classe entra no viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Verifica se a classe .fade-in-element está visível e ativa o efeito
    function checkVisibility() {
      var elements = document.querySelectorAll('.fade-in-element');
      
      elements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }

    // Ativa a verificação no carregamento da página e no scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

//slide
$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });
});