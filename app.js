document.addEventListener('DOMContentLoaded', function () {
  const bannerList = document.querySelector('.banner-list');
  const images = document.querySelectorAll('.banner-list img');
  let index = 0;
  const imageWidth = images[0].clientWidth;

  setInterval(() => {
      index = (index + 1) % images.length;
      updateBanner();
  }, 5000); // Altere o valor 3000 para ajustar o intervalo de transição em milissegundos

  function updateBanner() {
      const translateValue = -index * imageWidth + 'px';
      bannerList.style.transform = 'translateX(' + translateValue + ')';
  }
});


const seta = document.getElementById("seta");

seta.addEventListener("click", () => {
    document.getElementById("baixo").scrollIntoView({
        behavior: "smooth"
    });
});