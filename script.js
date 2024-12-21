// Selecionando os elementos do DOM que vamos manipular
const sliderContainer = document.querySelector(".slider-container");  // O container geral do slider
const slidRight = document.querySelector(".right-slid");  // O lado direito do slider, onde os slides se movem
const slidLeft = document.querySelector(".left-slid");  // O lado esquerdo do slider, onde os slides também se movem
const upButton = document.getElementById("up-btn");  // Botão para subir (ir para o próximo slide)
const downButton = document.getElementById("down-btn");  // Botão para descer (voltar ao slide anterior)

// Calcula o número de slides disponíveis (baseado no número de <div> dentro de "slidRight")
const sliderLength = slidRight.querySelectorAll("div").length;  

// Inicializando o índice do slide ativo como 0 (o primeiro slide)
let activeSlideIndex = 0;

// Ajustando a posição inicial do "slidLeft" para que o último slide esteja visível quando começamos
slidLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

// Adicionando ouvintes de eventos nos botões de navegação
downButton.addEventListener("click", () => nextSlide("up"));  // Quando clicar no botão de "descer", vai chamar a função para ir para o próximo slide
upButton.addEventListener("click", () => nextSlide("down"));  // Quando clicar no botão de "subir", vai chamar a função para voltar ao slide anterior

// Função que é responsável por navegar entre os slides
function nextSlide(params) {
  // Pegamos a altura do container do slider, para saber quanto mover o conteúdo (cada slide)
  const sliderHeight = sliderContainer.clientHeight;

  // Se o parâmetro passado for "up", significa que o usuário quer ir para o próximo slide (descer)
  if (params === "up") {
    activeSlideIndex++;  // Incrementa o índice do slide ativo (vai para o próximo)
    
    // Se o índice ultrapassar o número de slides, volta ao primeiro slide
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;  // Reseta o índice para 0, indo para o primeiro slide
    }
  }

  // Se o parâmetro passado for "down", significa que o usuário quer voltar ao slide anterior (subir)
  if (params === "down") {
    activeSlideIndex--;  // Decrementa o índice do slide ativo (volta para o slide anterior)
    
    // Se o índice for menor que 0, volta para o último slide
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;  // Reseta o índice para o último slide
    }
  }

  // Atualiza a posição do "slidRight" com base no índice ativo
  // Aqui movemos a posição do lado direito do slider para cima (com sinal negativo) com base na altura do slider
  slidRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

  // Atualiza a posição do "slidLeft" com base no índice ativo
  // Aqui movemos a posição do lado esquerdo do slider para baixo (sem o sinal negativo) com base na altura do slider
  slidLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
