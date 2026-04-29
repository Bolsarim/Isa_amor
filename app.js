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




const cards = document.querySelectorAll(".card");

let atual = 0;

function trocarCard(){

  cards[atual].classList.remove("active");

  atual++;

  if(atual >= cards.length){
    atual = 0;
  }

  cards[atual].classList.add("active");
}

setInterval(trocarCard, 5000);










const letras = [
  ["S","O","R","R","I","S","O","X","P","L"],
  ["A","B","R","A","Ç","O","T","Y","K","M"],
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L","Ç"],
  ["O","L","H","A","R","N","B","V","C","X"],
  ["Z","X","C","V","B","N","M","Q","W","E"],
  ["R","T","Y","U","I","O","P","A","S","D"],
  ["F","G","H","J","K","L","Ç","Z","X","C"],
  ["V","B","N","M","Q","W","E","R","T","Y"],
  ["U","I","O","P","A","S","D","F","G","H"]
];

const palavras = ["SORRISO", "ABRAÇO", "OLHAR"];

const grid = document.getElementById("grid");

let selecionadas = [];

letras.forEach((linha, row) => {

  linha.forEach((letra, col) => {

    const div = document.createElement("div");

    div.classList.add("cell");

    div.textContent = letra;

    div.dataset.letra = letra;

    div.addEventListener("click", () => selecionar(div));

    grid.appendChild(div);
  });
});

function selecionar(cell){

  cell.classList.toggle("selected");

  const letra = cell.dataset.letra;

  if(cell.classList.contains("selected")){
    selecionadas.push(letra);
  }else{
    selecionadas.pop();
  }

  verificar();
}

function verificar(){

  const texto = selecionadas.join("");

  palavras.forEach((palavra, index) => {

    if(texto.includes(palavra)){

      document
      .getElementById(`palavra${index + 1}`)
      .classList.add("done");

      document
      .querySelectorAll(".selected")
      .forEach(el => {
        el.classList.add("found");
        el.classList.remove("selected");
      });

      selecionadas = [];
    }
  });

  const completas = document.querySelectorAll(".done");

  if(completas.length === 3){

    document.getElementById("message").innerHTML =
      "💖 Você encontrou tudo que eu mais gosto em você 💖";
  }
}