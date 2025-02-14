function alterarStatus(id) {
    // Obtém o elemento do jogo com base no ID
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Seleciona a imagem do jogo dentro do elemento
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    
    // Seleciona o botão de ação dentro do elemento
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Verifica se o jogo está disponível para aluguel
    if (botao.textContent === 'Alugar') {
        botao.classList.add('dashboard__item__button--return'); // Adiciona a classe de botão de devolução
        botao.textContent = 'Devolver'; // Altera o texto do botão para "Devolver"
        imagem.classList.add('dashboard__item__img--rented'); // Adiciona a classe de imagem para indicar aluguel
    } else {
        botao.classList.remove('dashboard__item__button--return'); // Remove a classe de botão de devolução
        botao.textContent = 'Alugar'; // Altera o texto do botão para "Alugar"
        imagem.classList.remove('dashboard__item__img--rented'); // Remove a classe de imagem de jogo alugado
    }
}

//nota: o if também poderia ser feito com imagem.classlist === '.dashboard__item__img--rented
